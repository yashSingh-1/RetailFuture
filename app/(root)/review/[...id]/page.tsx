import ReviewProduct from '@/components/Forms/ReviewProduct'
import { getProductById } from '@/lib/actions/product.actions';
import React from 'react'

const page = async (params: any) => {
  const id = params.params.id[0];

  const product = await getProductById(id);
  
  return (
    <div className='bg-zinc-900 h-screen md:h-full '>
      <ReviewProduct
      productDescription={product!.description}
       imgOfProduct={product!.image} 
       productTitle={product!.title} 
       productPrice={product!.price} 
       productCommission={product!.commissionRate} 
       />
    </div>
  )
}

export default page