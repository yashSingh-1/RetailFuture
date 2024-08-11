import CurrentUser from '@/components/shared/CurrentUser'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async () => {
  const user = await currentUser();
  return (
    <div className='bg-zinc-900 w-full h-screen'>
      <CurrentUser
        id={user!.id}
      />
    </div>
  )
}

export default page