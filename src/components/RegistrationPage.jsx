import React, { useState } from "react";

/**
 * Registration page
 * - Collects fields (name, mobile, email, dob, referencePerson, attendedBefore)
 * - Posts to /api/initiate-payment (server returns paymentUrl)
 * - Redirects to paymentUrl
 */

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    referencePerson: "",
    attendedBefore: "" // "Yes" or "No"
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.mobile || !form.email || !form.dob || !form.attendedBefore) {
      alert("Please complete all required fields (including 'Attended Before').");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amount: 100 // ₹100 fixed amount
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to initiate payment");
      }
      const paymentUrl = data.paymentUrl;
      if (!paymentUrl) throw new Error("Payment URL missing");

      // Redirect to PhonePe page
      window.location.href = paymentUrl;
    } catch (err) {
      console.error(err);
      alert("Could not initiate payment. Please try again or contact admin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Abhyuthanam 2025 — Registration</h1>
        <p style={styles.subtitle}>Registration fee: ₹100. Fill details and proceed to payment.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Mobile (WhatsApp) *</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Email ID *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Date of Birth *</label>
          <input name="dob" type="date" value={form.dob} onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Reference Person (who inspired you)</label>
          <input name="referencePerson" value={form.referencePerson} onChange={handleChange} style={styles.input} />

          <div style={{ marginTop: 6 }}>
            <label style={styles.label}>Have you attended Abhyuthanam before? *</label>
            <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="attendedBefore"
                  value="Yes"
                  checked={form.attendedBefore === "Yes"}
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="attendedBefore"
                  value="No"
                  checked={form.attendedBefore === "No"}
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </div>
          </div>

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Redirecting to payment..." : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg,#f5f7fb,#ffffff)",
    padding: "40px 20px"
  },
  card: {
    width: "100%",
    maxWidth: 760,
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    padding: 28
  },
  title: { fontSize: 28, margin: 0, color: "#0f172a" },
  subtitle: { color: "#475569", marginTop: 8, marginBottom: 18 },
  form: { display: "grid", gap: 12 },
  label: { fontSize: 13, color: "#475569" },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #e6e9ee",
    fontSize: 15,
    outline: "none"
  },
  radioLabel: { fontSize: 15, color: "#0f172a" },
  button: {
    marginTop: 12,
    padding: "12px 16px",
    borderRadius: 10,
    background: "#0f172a",
    color: "#fff",
    fontSize: 16,
    border: "none",
    cursor: "pointer"
  }
};
