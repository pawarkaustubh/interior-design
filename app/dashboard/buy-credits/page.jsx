"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

function BuyCredits() {
  const creditsOption = [
    {
      credits: 5,
      amount: 0.99,
    },
    {
      credits: 10,
      amount: 1.99,
    },
    {
      credits: 25,
      amount: 3.99,
    },
    {
      credits: 50,
      amount: 6.99,
    },
    {
      credits: 75,
      amount: 8.99,
    },
    {
      credits: 100,
      amount: 9.99,
    },
  ];


  const [selectedOption, setSelectedOption] = useState([]);
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const router = useRouter();

  const onPaymentSuccess = async() => {
    console.log("Payment successful");
    //Update user credits in DB
    const result = await db.update(Users)
    .set({
      credits: userDetail?.credits + selectedOption?.credits,
    }).returning({id: Users.id});

    if(result){
      setUserDetail(prev => ({
        ...prev,
        credits: userDetail?.credits + selectedOption?.credits,
      }))
      router.push("/dashboard");
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-3xl md:text-4xl text-gray-800">
          Buy More Credits
        </h2>
        <p className="mt-2 text-gray-600">
          Unlock endless possibilities and enhance your room design experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {creditsOption.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 justify-center items-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg
                            ${
                              selectedOption?.credits === item.credits
                                ? "border-4 border-blue-500"
                                : "border border-gray-200"
                            }`}
          >
            <h2 className="text-4xl font-extrabold text-gray-800">
              {item.credits}
            </h2>
            <h3 className="text-lg font-medium text-gray-500">Credits</h3>

            <Button
              className={`w-full py-2 px-4 rounded-lg text-white font-bold transition ${
                selectedOption?.credits === item.credits
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setSelectedOption(item)}
            >
              Buy Now
            </Button>

            <h2 className="text-lg font-semibold text-blue-500">
              ${item.amount}
            </h2>
          </div>
        ))}
      </div>
      
      {/* <div className="mt-20">
        {selectedOption?.amount && 
          <PayPalButtons style={{ layout: "horizontal" }} />
        }
      </div> */}

      {selectedOption && selectedOption.amount && (
        <div className="mt-20">
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: selectedOption?.amount?.toFixed(2),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={() => onPaymentSuccess()}
            onCancel={() => console.log("Payment cancelled")}
            // onApprove={(data, actions) => {
            //   return actions.order.capture().then((details) => {
            //     alert(
            //       "Transaction completed by " + details.payer.name.given_name
            //     );
            //   });
            // }}
          />
        </div>
      )}
    </div>
  );
}

export default BuyCredits;
