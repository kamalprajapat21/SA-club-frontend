import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    reference: "",
    participationType: "",
    reason: "",
   
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (basic)
    if (!formData.name || !formData.mobile || !formData.email || !formData.dob) {
      alert("Please fill all required fields.");
      return;
    }
    // if (!formData.agree) {
    //   alert("Please agree to the terms before submitting.");
    //   return;
    // }

    // You’ll replace this with an API call later
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Registration Successful!
          </h2>
          <p className="text-slate-600 mb-6">
            Thank you for registering for <b>Abhyuthanam 2025</b>.  
            You’ll receive a confirmation email shortly.
          </p>
          <p className="text-sm text-slate-500">
            Keep your payment receipt and email handy for entry verification.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-semibold text-slate-800 mb-6 text-center">
          Abhyuthanam 2025 Registration
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Mobile Number (WhatsApp) *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Email ID *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Reference Person (Who inspired you to join)
            </label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

        <div>
            <label className="block text-sm text-slate-600 mb-1">
              Have you ever attended Abhyuthanam Festival ?
            </label>
            <select
              name="participationType"
              value={formData.participationType}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes, I have attended.</option>
              <option value="No">No, I haven't</option>
            </select>
          </div>

          {/* <div>
            <label className="block text-sm text-slate-600 mb-1">
              
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div> */}

          {/* <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-slate-600"
            />
            <label className="text-sm text-slate-600">
              I confirm that I have completed the ₹400 payment and agree to the event
              terms.
            </label>
          </div> */}

          <button
            type="submit"
            className="w-full py-3 bg-slate-800 text-white text-lg rounded-full hover:bg-slate-700 transition-all duration-300"
          >
            Submit Registration
          </button>
        </form>
      </motion.div>
    </div>
  );
}