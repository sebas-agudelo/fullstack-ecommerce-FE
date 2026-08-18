import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useGetOrderDetails } from '../../hooks/checkout/useCheckout';

export default function CheckoutSuccess() {
  const [searhParams] = useSearchParams()
  const order_number = searhParams.get("ordernummer")

  const { data } = useGetOrderDetails(order_number)

  return (
    <main className='pt-[35px] px-4 md:px-0'>
      <div className='flex flex-col items-center'>
        <div className='mb-6'>
          <IoIosCheckmarkCircleOutline className='text-[56px] text-green-500' />
        </div>

        <div className="text-center">
          <p className='text-3xl font-semibold'>Tack för ditt köp!</p>
          <p className=''>Din betalning har genomförts.</p>

          <div>
            <p>Ett bekräftelsemejl med orderdetaljer har skickats till: {data?.email}</p>
            <p>Beställningens belopp: {data?.total_amount} kr.</p>
            <p className="mb-[100px]">Ordernummer: #{order_number}</p>
          </div>
          <Link to={"/products"} className='bg-purple-950 text-white font-medium py-3 px-6 rounded-2xl lg:hover:bg-purple-900 lg:hover:font-normal lg:hover:shadow-lg'>Fortsätt handla</Link>
        </div>
      </div>
    </main>
  )
}
