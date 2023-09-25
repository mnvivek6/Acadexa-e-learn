import React, { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
// import PaymentSuccessPage from "../../Components/client/ListTrainer/paymentSuccess"; // Import the PaymentSuccessPage component
import userAxios from "../../Axios/userAxios";
import { strict } from "assert";


interface PaypalProps {
  Amout: string //Specify the type here, e.g., number
}
function Paypal({Amout }:PaypalProps)  {
  const [{ isPending }] = usePayPalScriptReducer();
  console.log(Amout,'dfsdfsefesafsdfdsfsedfsdffsdf');
  
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle the payment completion
  const handlePaymentSuccess = (details: any) => {
    console.log("Payment completed successfully:", details);
    if (details) {
    

    }
  };
  
  
  

  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: Amout,
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions:any) => {
          return actions.order.capture().then(handlePaymentSuccess);
        }}
        style={{ layout: "horizontal" }}
        disabled={isPending}
      />

      {/* Render the PaymentSuccessPage component if payment is completed */}
    
    </div>
  );
}

export default Paypal;
