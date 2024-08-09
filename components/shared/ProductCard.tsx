import Image from "next/image";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <div className="flex flex-col rounded-lg border-2 border-black m-2 bg-white shadow-2xl">
        <div className="m-2 flex justify-center">
            <Image src="/img/man.jpg" alt="product image" width={250} height={344} className="rounded-lg"/>
        </div>
        <div className="grid grid-cols-1 place-content-center">
            <div className="flex font-semibold ml-2">
                Product name must be 4 letters
            </div>
        </div>
        <div className="grid grid-cols-2 mx-2">
            <div className="text-zinc-600 text-sm">
                Price: 3000
            </div>
            <div className="text-zinc-600 text-sm">
            Commission:20% 
            </div>
        </div>
        <div className="flex justify-between my-2">
            <Button className="w-full mx-2">Just Review</Button>
            <Button className="w-full mr-2 bg-blue-600">Affiliate</Button>
        </div>
    </div>
  )
}

export default ProductCard