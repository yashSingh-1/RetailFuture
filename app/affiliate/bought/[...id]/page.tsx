import { getProductById } from "@/lib/actions/product.actions";
import Link from "next/link";

const BoughtPage = async ({ params }: { params: any }) => {
  const userID = params.id[0];
  const ProductId = params.id[1];
  const ProductBought = await getProductById(ProductId);
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-900">
      <Link href="/" className="w-full px-8 py-4 bg-zinc-950 text-white">
        <span className="text-2xl font-mono">Retail</span>
      </Link>
      <div className="text-4xl font-mono text-blue-600 p-4 md:p-8">
        Successfully Bought
      </div>
      <div className="m-auto text-white text-2xl font-mono px-8">
        {ProductBought?.title}
        <div className="text-xl font-mono text-slate-600 m-auto">
          This will be delivered to you in a few Days.
        </div>
      </div>
    </div>
  );
};

export default BoughtPage;
