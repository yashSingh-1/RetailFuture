import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    id: string
    title: string,
    price: string,
    commission: string,
    description: string,
    image: string
}

const ProductCard = ({
    id,
    title,
    price,
    commission,
    description,
    image
}: Props) => {

  return (
    <div className="flex flex-col rounded-lg border-2 border-black m-2 bg-white shadow-2xl h-fit">
        <div className="m-2 flex justify-center">
            <Image src={image} alt="product image" width={250} height={344} className="rounded-lg"/>
        </div>
        <div className="grid grid-cols-1 place-content-center">
            <div className="flex font-semibold ml-2">
                {title}
            </div>
        </div>
        <div className="grid grid-cols-2 mx-2">
            <div className="text-zinc-600 text-sm">
                Price: {price}
            </div>
            <div className="text-zinc-600 text-sm">
            Commission:{commission}% 
            </div>
        </div>
        <div className="flex justify-between my-2">
            <Link href={`/reviews/${id}`} className="w-full mx-2 flex">
            <Button className="m-auto w-full bg-blue-600 hover:bg-slate-800" >Review and become Affiliate</Button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard