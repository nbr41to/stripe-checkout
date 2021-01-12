import React from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CardForm = () => {
  // Elementsプロバイダーの中でないと使用できない
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 通信の結果を分割代入
    // error, createPaymentMethod以外にも返ってくるものがあるらしい
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    if (!error) {
      const { id } = paymentMethod
      const { data } = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: 1980,
      })
      console.log(data)
    } else {
      console.log(error)
    }
  }
  return (
    <form className="box" onSubmit={handleSubmit}>
      <CardElement />
      <button>決定</button>
    </form>
  )
}
