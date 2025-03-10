import React from "react";
import Styles from "./Pricing.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import icons

const pricingPlans = [
  {
    name: "FREE",
    price: "₹0",
    description: "Basic access to AI-powered speech enhancement tools.",
    features: {
      "Speech-to-text": true,
      "Basic audio processing": true,
      "Unlimited transcriptions": false,
      "High-quality enhancement": false,
      "Priority support": false,
    },
  },
  {
    name: "PRO",
    price: "₹499",
    description: "Unlock advanced features for professional-grade speech correction.",
    features: {
      "Speech-to-text": true,
      "Basic audio processing": true,
      "Unlimited transcriptions": true,
      "High-quality enhancement": true,
      "Priority support": false,
    },
  },
  {
    name: "PLUS",
    price: "₹999",
    description: "The ultimate package for businesses and professionals.",
    features: {
      "Speech-to-text": true,
      "Basic audio processing": true,
      "Unlimited transcriptions": true,
      "High-quality enhancement": true,
      "Priority support": true,
    },
  },
];

const Pricing = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.heading}>
        <h3>Getting Started with Speech Fix</h3>
      </div>

      <div className={Styles.pricesection}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className={Styles.plan}>
            <h4>{plan.name}</h4>
            <p>{plan.description}</p>
            <p><span>{plan.price}</span>/month</p>

            {Object.entries(plan.features).map(([feature, isAvailable], i) => (
              <div key={i} className={Styles.benefitItem}>
                {isAvailable ? (
                  <FaCheckCircle className={Styles.iconAvailable} />
                ) : (
                  <FaTimesCircle className={Styles.iconUnavailable} />
                )}
                <p>{feature}</p>
              </div>
            ))}

            <button>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
