import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Privacy.css";
import {
  ShieldCheck,
  Info,
  Lock,
  Users,
  Link2,
  Baby,
  RefreshCw,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

function Privacy() {
  const policyData = [
    {
      icon: <Info size={28} />,
      title: "1. Information We Collect",
      content:
        "<strong>Personal Information:</strong> Name, email, phone number, billing info, passport details, etc.<br/><strong>Usage Data:</strong> IP, browser type, pages visited, etc.<br/><strong>Cookies:</strong> Used for tracking and personalization.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "2. How We Use Your Information",
      content:
        "We may use your information to:<br/><ul><li>Process bookings and payments</li><li>Improve services and user experience</li><li>Send marketing emails (opt-out available)</li><li>Provide customer support</li></ul>",
    },
    {
      icon: <Users size={28} />,
      title: "3. Data Sharing and Disclosure",
      content:
        "We do not sell or lease your data. We may share it with:<br/><ul><li>Trusted service providers (e.g., payment gateways, hotels)</li><li>Legal authorities for compliance</li><li>Parties involved in a merger or acquisition</li></ul>",
    },
    {
      icon: <Lock size={28} />,
      title: "4. Data Security",
      content:
        "We take reasonable precautions to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of data transmission over the internet is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.",
    },
    {
      icon: <FileText size={28} />,
      title: "5. Your Rights",
      content:
        "Depending on your jurisdiction, you may:<br/><ul><li>Access the personal data we hold</li><li>Request corrections</li><li>Request deletion of your data</li><li>Opt-out of marketing communications</li></ul>",
    },
    {
      icon: <Link2 size={28} />,
      title: "6. Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices of other sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    },
    {
      icon: <Baby size={28} />,
      title: "7. Children's Privacy",
      content:
        "Our services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children. If we discover that we have collected personal data from a child under 16, we will take immediate steps to delete such information.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "8. Changes to This Privacy Policy",
      content:
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated accordingly. We encourage you to review this Privacy Policy periodically for any updates.',
    },
  ];

  return (
    <>
      <div className="privacy-policy-page">
        <Banner title="Privacy" breadcrumb="Privacy Policy" />
        <div className="privacy-policy-container">
          <header className="privacy-policy-header">
            <p className="privacy-policy-subtitle">Your Trust, Our Priority</p>
            <h1>Privacy Policy</h1>
            <p>
              At Team-Eco Explorers Outdoors and Holidays, we value your
              privacy and are committed to protecting the personal information
              you share with us. This Privacy Policy outlines the types of data
              we collect, how we use it, and the measures we take to protect it.
            </p>
          </header>
          <main className="privacy-policy-list">
            {policyData.map((item, index) => (
              <div className="privacy-policy-item" key={index}>
                <div className="privacy-policy-item-icon">{item.icon}</div>
                <div className="privacy-policy-item-content">
                  <h3>{item.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              </div>
            ))}
            <div className="privacy-policy-item">
              <div className="privacy-policy-item-icon">
                <Mail size={28} />
              </div>
              <div className="privacy-policy-item-content">
                <h3>9. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                  <br />
                  <strong>Email:</strong> Eco Explorers@gmail.com
                  <br />
                  <strong>Phone:</strong>+91 9370704070
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Privacy;
