import FormUserDetails from '@/components/Forms/FormUserDetails'
import { findUserInDB } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const user = await currentUser();

  if(!user) redirect("/sign-in")

  const foundUser = await findUserInDB(user.id);

  if(foundUser){
    redirect("/")
  }

  const email = user.emailAddresses[0].emailAddress
  return (
    <div className='bg-zinc-800 flex flex-col'>
      <div className='text-3xl font-mono text-blue-600 p-4 md:p-8'>
        Onboarding
      </div>
        <FormUserDetails name={user.fullName!} email={email} userClerkId={user.id} img={user.imageUrl} />
    </div>
  )
}

export default page