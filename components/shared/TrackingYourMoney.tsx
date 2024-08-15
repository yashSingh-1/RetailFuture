import { getProductById } from "@/lib/actions/product.actions"

const TrackingYourMoney = async ({ProductID}: {ProductID: string}) => {
    const product = await getProductById(ProductID)
    const moneyYouMade = Number(product?.commissionRate) * ( Number(product?.price) / 100)

  return (
    <div className="flex">
        <div className="bg-zinc-600 text-white w-[250px] p-4 m-2 ms-8 rounded-lg">
            Your Commission: {moneyYouMade}
        </div>
    </div>
  )
}

export default TrackingYourMoney