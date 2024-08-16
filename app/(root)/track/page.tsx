import TrackingYourMoney from '@/components/shared/TrackingYourMoney';
import { FetchingIfAnyoneBoughtYourAffilaiteProducts, findUserInDB } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const TrackPage = async () => {
    const user = await currentUser();
    const userInDB = await findUserInDB(user!.id)
    const PeopleWhoBoughtYourAffiliate = await FetchingIfAnyoneBoughtYourAffilaiteProducts(userInDB!.id)
    
  return (
    <div className='w-full min-h-screen h-full bg-zinc-900'>
        <div className='text-4xl p-8 md:p-4 text-blue-600 font-mono'>
            Tracking Your Achievements: 
        </div>
        <div className='text-2xl px-8 py-4 text-slate-300 font-mono'>
            People who bought your Affiliate Product:
        </div>
        <div className='text-white w-full'>
            {
                PeopleWhoBoughtYourAffiliate.length > 0 ?
                PeopleWhoBoughtYourAffiliate.map((people) => (
                    <div className='w-full' key="Something">
                        {
                            people.IfSomeBodyBoughtHisReviewedProduct.length > 0 ? 
                            people.IfSomeBodyBoughtHisReviewedProduct.map((items) => (
                                <div className='flex flex-col md:flex-row border-b border-slate-600 py-4' key={items.id}>
                                    <div key={items.id} className='flex flex-col bg-slate-600 w-[300px] p-4 m-2 ms-8 rounded-lg '>
                                    {items.Email}
                                </div>
                                <div>
                                    <TrackingYourMoney ProductID={items.ProductBought}/>
                                </div>
                                </div>
                            )): <div className='text-2xl font-mono text-white px-4 my-10'>
                            No one has yet bought your products
                        </div>
                        }
                    </div>
                )): <div className='text-2xl font-mono text-white'>
                {/* You have not produced any Affiliate Links yet! */}
            </div>
            }

        </div>
    </div>
  )
}

export default TrackPage