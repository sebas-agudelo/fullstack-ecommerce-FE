import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useGetPaymentStatus } from '../../hooks/checkout/useCheckout';
import ContentSpinner from '../../components/spinners/ContentSpinner';
import { TiWarningOutline } from "react-icons/ti";
import { Logo } from '../../components/Common/Logo';
import { CartContext } from '../../Context/useCartContext';

export default function PaymentStatus() {
  const [searhParams] = useSearchParams()
  const nav = useNavigate()

  const payment_intent = searhParams.get("payment_intent")
  const payment_intent_client_secret = searhParams.get("payment_intent_client_secret")

  const { data, isLoading } = useGetPaymentStatus(payment_intent)
  const {cart} = useContext(CartContext);


  useEffect(() => {
    if (data?.payment_status === "paid") {
      localStorage.clear('cart')
      nav(`/success?ordernummer=${data?.order_id}`)
    }
  }, [data, cart])

  return (
    <main className='pt-[35px] px-4 md:px-0'>

      <div className='mb-16 flex justify-center items-center'>
        <Logo />
      </div>

      {(isLoading) && (
        <div className='text-center'>
          <div className='mb-[100px]'>
            <p className='text-3xl font-semibold mb-6'>Vi behandlar din betalning</p>
            <p className='text-sm font-normal shadow-lg bg-gray-100 p-4 rounded-xl max-w-[350px] text-center m-auto'><p className='flex justify-center text-xl mb-2'><TiWarningOutline /></p> Vänligen stäng inte ner fönstret och uppdatera inte sidan.</p>
          </div>
          <div>
            <ContentSpinner />

          </div>
        </div>
      )}
    </main>
  )
}
