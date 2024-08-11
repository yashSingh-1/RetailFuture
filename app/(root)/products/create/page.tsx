import CreateProduct from "@/components/Forms/CreateProduct"
import { currentUser } from "@clerk/nextjs/server"

const page = async () => {
    const user = await currentUser();
    const id = user!.id
    console.log("Id",id)
  return (
    <div className="bg-zinc-900 w-full h-screen md:h-full">
        <CreateProduct id={id} />
    </div>
  )
}

export default page