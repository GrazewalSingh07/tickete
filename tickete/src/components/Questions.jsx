import { Box } from "@mui/material";
import React from "react";

import { QuestionComponent } from "./QuestionComponent";
import { Needhelp } from "./Needhelp";
const data = [
  {
    question: "Are my tickets transferable?",
    answer: `No. The tickets can only beused by the person(s) whose details are indicated on the voucher. If you're booking for friends and family, make sure to key in their details`,
  },
  {
    question: "How long will it take to receive my ticket?",
    answer: `The tickets will hit your inbox as soon as you complete making the payment`,
  },
  {
    question: "Is my payment secure?",
    answer: `We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!`,
  },
  {
    question: "What type of payment options do you offer?",
    answer: `We accept payments via all major internationally and projects against fraud and unautorized transactions. In short, your payment is a 100% secure and you have nothing to worry`,
  },
  {
    question: "When will I be charged for my booking?",
    answer: `Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost`,
  },
  {
    question: "Why am I being charged in USD?",
    answer: `All payments on Tickete are charged in USD.Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we're working on accepting payments in currencies across the world`,
  },
  {
    question: "Will I get a complete refund if I cancel this ticket?",
    answer: `The canellation and refund policy varies per ticket. While some can be canceled up to 24,48, or 72 hours before they start, several others can't be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.`,
  },
];

export const Questions = () => {
  return (
    <Box className='py-4 '>
      <Box className='py-4'>
        <p className="!font-semibold !text-2xl">Frequently asked questions</p>
      </Box>
      <Box  className='flex justify-around  max-md:flex-col max-md:m-auto '>
        <Box   className='min-w-[320px] max-w-[920px] w-full max-md:m-auto' >
        {data.map((el,index) => {
          return <QuestionComponent key={index} question={el.question}answer={el.answer}/>;
        })}
        </Box>
       <Box className='py-4 max-md:m-auto max-md:w-full'>
       <Needhelp/>
       </Box>
      </Box>
    </Box>
  );
};
