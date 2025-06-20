import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <main className="main flex-grow justify-center ">
      <h1 className="font-bold text-center my-8 text-3xl">
        Gérer efficacement votre stock !
      </h1>
      <Link href="/stock" className="btn btn-primary">
        <span>Voir le stock</span>
        <ChevronRightIcon className="size-6 " />
      </Link>
    </main>
  )
}
