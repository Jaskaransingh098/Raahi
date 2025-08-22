import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import "./Faq.css";
import Banner from "../../components/Banner/Banner";

const faqData = [
  {
    question: "1. What services do you offer?",
    answer:
      "Travel with peace of mind knowing that 24/7 support, local expertise, and flexible booking options are always part of the journey. Whether you’re traveling solo, with family, or in a group, our tours combine comfort, culture. This includes airport pickup, hotel check-in, leisure walks, and a welcome briefing.",
  },
  {
    question: "2. Can I customize my travel package?",
    answer:
      "Absolutely! We specialize in creating customized travel plans. You can work with our travel experts to design an itinerary that perfectly fits your interests, budget, and schedule.",
  },
  {
    question: "3. Do you offer both domestic and international tours?",
    answer:
      "Yes, we offer a wide range of both domestic and international tours. From local treks in the Sahyadris to exotic getaways in Thailand, we have something for every kind of traveler.",
  },
  {
    question: "4. Are flights included in your tour packages?",
    answer:
      "Flights are typically not included in the base price of our packages to provide flexibility. However, we can assist you with booking flights as an add-on service to ensure a seamless travel experience.",
  },
  {
    question: "5. Do I need travel insurance?",
    answer:
      "We highly recommend that all travelers have comprehensive travel insurance. It provides a safety net for unforeseen circumstances like trip cancellations, medical emergencies, or lost baggage.",
  },
  {
    question: "6. What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), bank transfers, and popular digital wallets. All transactions are secure.",
  },
  {
    question: "7. What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the tour package and the time of cancellation. Please refer to the specific terms and conditions of your booking or contact our support team for detailed information.",
  },
  {
    question: "8. How experienced are your tour guides?",
    answer:
      "Our tour guides are our biggest asset. They are highly experienced, professionally trained, and certified in wilderness first-aid. They possess deep local knowledge to make your journey enriching and safe.",
  },
  {
    question: "9. What kind of accommodations do you provide?",
    answer:
      "We partner with a range of trusted hotels, resorts, and guesthouses to suit different budgets and preferences. All our accommodations are vetted for quality, safety, and comfort.",
  },
  {
    question: "10. How do I prepare for a trek?",
    answer:
      "Once you book a trek with us, we will provide you with a detailed guide on physical preparation, a checklist of things to pack, and all other necessary information to ensure you are well-prepared for your adventure.",
  },
];

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(0); // First question is open by default

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <div className="faq-page">
        <Banner title="FAQs" breadcrumb="Faqs" />
        <section className="faq-section">
          <div className="faq-container">
            {/* Left Column */}
            <div className="faq-left-col">
              <div className="faq-quick-answers">
                <h3>Quick Answers</h3>
                <p>
                  Find immediate answers to our most common questions right
                  here.
                </p>
              </div>
              <div className="faq-discover-card">
                <img
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9otby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Resort pool"
                />
                <p className="subtitle">Discover World</p>
                <h3>Looking For Trusted Travel Agency</h3>
                <button className="faq-booking-btn">
                  Booking Tour
                  <span className="faq-booking-btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="faq-right-col">
              {faqData.map((faq, index) => (
                <div
                  className={`faq-item ${openQuestion === index ? "open" : ""}`}
                  key={index}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h4>{faq.question}</h4>
                    <div className="faq-toggle-icon">
                      {openQuestion === index ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </div>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
