import React from "react";
import { ScrollText } from "lucide-react";

const TermsandConditions = () => {
return ( <div className="terms-container"> <div className="terms-card">
{/* Header */} <div className="terms-header"> <ScrollText size={40} className="terms-icon" /> <h1>Terms & Conditions</h1> </div> <p className="last-updated">
Last updated on <strong>06-Nov-2025 15:08:13</strong> </p>

    {/* Terms & Conditions Section */}
    <p className="intro">
      These Terms and Conditions, along with privacy policy or other terms
      ("Terms") constitute a binding agreement by and between{" "}
      <strong>Spiritual Activity Club</strong> ("Website Owner" or "we" or
      "us" or "our") and you ("you" or "your") and relate to your use of our
      website, goods (as applicable) or services (as applicable)
      (collectively, “Services”).
    </p>

    <p>
      By using our website and availing the Services, you agree that you
      have read and accepted these Terms (including the Privacy Policy). We
      reserve the right to modify these Terms at any time and without
      assigning any reason. It is your responsibility to periodically review
      these Terms to stay informed of updates.
    </p>

    <h2>Terms of Use</h2>
    <ul>
      <li>
        To access and use the Services, you agree to provide true, accurate,
        and complete information to us during and after registration, and
        you shall be responsible for all acts done through the use of your
        registered account.
      </li>
      <li>
        Neither we nor any third parties provide any warranty or guarantee
        as to the accuracy, timeliness, performance, completeness, or
        suitability of the information and materials offered on this website
        or through the Services, for any specific purpose. You acknowledge
        such information and materials may contain inaccuracies or errors
        and we expressly exclude liability for any such inaccuracies or
        errors to the fullest extent permitted by law.
      </li>
      <li>
        Your use of our Services and the website is solely at your own risk
        and discretion. You are required to independently assess and ensure
        that the Services meet your requirements.
      </li>
      <li>
        The contents of the website and the Services are proprietary to us,
        and you will not have any authority to claim any intellectual
        property rights, title, or interest in its contents.
      </li>
      <li>
        You acknowledge that unauthorized use of the Website or the Services
        may lead to legal action against you as per these Terms or
        applicable laws.
      </li>
      <li>
        You agree to pay us the charges associated with availing the
        Services.
      </li>
      <li>
        You agree not to use the website and/or Services for any purpose
        that is unlawful, illegal, or forbidden by these Terms or Indian or
        local laws that might apply to you.
      </li>
      <li>
        You agree and acknowledge that the website and the Services may
        contain links to third-party websites. On accessing these links, you
        will be governed by the terms of use, privacy policy, and other
        policies of such third-party websites.
      </li>
      <li>
        You understand that upon initiating a transaction for availing the
        Services, you are entering into a legally binding and enforceable
        contract with us for the Services.
      </li>
      <li>
        You shall be entitled to claim a refund of the payment made by you
        in case we are not able to provide the Service. The timelines for
        such return and refund will be according to the specific Service you
        have availed and within the time period provided in our policies (as
        applicable). In case you do not raise a refund claim within the
        stipulated time, this would make you ineligible for a refund.
      </li>
      <li>
        Notwithstanding anything contained in these Terms, the parties shall
        not be liable for any failure to perform an obligation under these
        Terms if performance is prevented or delayed by a force majeure
        event.
      </li>
      <li>
        These Terms and any dispute or claim relating to it, or its
        enforceability, shall be governed by and construed in accordance
        with the laws of India.
      </li>
      <li>
        All disputes arising out of or in connection with these Terms shall
        be subject to the exclusive jurisdiction of the courts in{" "}
        <strong>Kota, Rajasthan</strong>.
      </li>
      <li>
        All concerns or communications relating to these Terms must be
        communicated to us using the contact information provided on this
        website.
      </li>
    </ul>

    {/* Privacy Policy Section */}
    <h2>Privacy Policy</h2>
    <p className="last-updated">
      Last updated on <strong>06-Nov-2025</strong>
    </p>
    <p>
      This Privacy Policy outlines the practices of{" "}
      <strong>Spiritual Activity Club</strong> ("we", "us", or "our")
      regarding the collection, use, and disclosure of personal information
      when you use our Services, including our website and any related
      applications.
    </p>

    <ul>
      <li>
        <strong>1. Information we collect:</strong> Contact Information,
        Usage Data, Cookies & Tracking Technologies.
      </li>
      <li>
        <strong>2. How we collect information:</strong> Direct Interaction,
        Automated Technologies.
      </li>
      <li>
        <strong>3. Purpose of Data Collection:</strong> To provide and
        maintain Services, notify about changes, allow participation in
        features, and improve user experience.
      </li>
      <li>
        <strong>4. Sharing of your information:</strong> With service
        providers and legal authorities if required by law.
      </li>
      <li>
        <strong>5. Data Retention:</strong> We retain data only as necessary
        and delete it when no longer needed.
      </li>
      <li>
        <strong>6. Your Rights:</strong> Access, update, and delete your
        personal data whenever possible.
      </li>
      <li>
        <strong>7. Security:</strong> We use reasonable technical and
        organizational measures to protect your data.
      </li>
      <li>
        <strong>8. Changes:</strong> We may update this policy and notify
        via this page with the updated effective date.
      </li>
    </ul>

    <p className="note">
      <strong>Note:</strong> We don’t have any cancellation and refund
      policy.
    </p>
  </div>

  {/* Styles */}
  <style jsx>{`
    .terms-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #e3f2fd, #f8bbd0);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 50px 20px;
      animation: fadeIn 0.7s ease-in-out;
    }

    .terms-card {
      background: #ffffff;
      border-radius: 18px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      max-width: 950px;
      width: 100%;
      padding: 40px;
      color: #333;
      line-height: 1.6;
    }

    .terms-header {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #004aad;
      border-bottom: 2px solid #004aad;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .terms-icon {
      color: #004aad;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    h2 {
      margin-top: 25px;
      color: #004aad;
      font-size: 1.3rem;
      border-left: 4px solid #004aad;
      padding-left: 10px;
    }

    .last-updated {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 10px;
    }

    ul li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 10px;
      font-size: 0.97rem;
    }

    ul li::before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: #004aad;
      font-weight: bold;
    }

    .note {
      color: #d32f2f;
      font-weight: 500;
      margin-top: 15px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .terms-card {
        padding: 25px;
      }
      h1 {
        font-size: 1.6rem;
      }
      h2 {
        font-size: 1.1rem;
      }
    }
  `}</style>
</div>


);
};

export default TermsandConditions;
