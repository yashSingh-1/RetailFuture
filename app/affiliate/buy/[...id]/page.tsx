import BuyNowForm from '@/components/Forms/BuyNowForm';
import React from 'react'

const BuyPage = ({ params }: { params: any }) => {
    const userID = params.id[0];
  const ProductId = params.id[1];
  console.log(params)
  return (
    <div className='bg-zinc-900 w-full h-screen text-white'>
        <BuyNowForm 
        ProductThatsIsBought={ProductId} 
        userWhoGeneratedTheAffilaiate={userID} 
        />
    </div>
  )
}

export default BuyPage