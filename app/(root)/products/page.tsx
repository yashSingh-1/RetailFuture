import AllProducts from '@/components/Forms/AllProducts'
import { Button } from '@/components/ui/button'
import { GetAllProducts } from '@/lib/actions/product.actions'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await currentUser();
  return (
    <div className='bg-zinc-900 w-full h-full'>
      <div className='pt-4 p-2'>
      <AllProducts id={user!.id} />
      </div>
       <div className='mx-2 my-2'>
       <Link href="/products/create">
       <Button className='bg-blue-600 p-2 w-full hover:bg-blue-500'>
          Create a Product
        </Button>
       </Link>
       </div>
    </div>
  )
}

export default page