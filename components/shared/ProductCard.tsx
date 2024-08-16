import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    id: string
    title: string,
    price: string,
    commission: string,
    description: string,
    image: string,
    userThatCreated: string
}

const ProductCard = ({
    id,
    title,
    price,
    commission,
    description,
    image,
    userThatCreated
}: Props) => {

  return (
    <div className="flex flex-col rounded-xl border-b-2 border-slate-700 py-2 z-30 m-2 bg-zinc-800 text-white shadow-4xl h-fit font-mono">
        <div className="m-2 flex justify-center">
            <Image src={image} alt="product image" width={250} height={344} className="rounded-lg"/>
        </div>
        <div className="grid grid-cols-1 place-content-center">
            <div className="flex font-semibold ml-2 text-xl">
                {title}
            </div>
        </div>
        <div className="grid grid-cols-2 mx-2">
            <div className="text-zinc-300 text-sm">
                Price: ₹{price}
            </div>
            <div className="text-zinc-300 text-sm">
            Commission:{commission}% 
            </div>
        </div>
        <div className="mx-2 text-sm ">
            From: {userThatCreated}
        </div>
        <div className="flex justify-between my-2">
            <Link href={`/reviews/${id}`} className="w-full mx-2 flex">
            <Button className="m-auto w-full bg-blue-600 hover:bg-blue-800 font-extrabold" >Review and become Affiliate</Button>
            </Link>
        </div>
        {/* <div className="grid grid-cols-2 mx-2 mb-2 gap-x-2">
            <Button className="bg-slate-400">Like It!</Button>
            <Button className="bg-red-400">Dislike It!</Button>

        </div> */}
    </div>
  )
}

export default ProductCard