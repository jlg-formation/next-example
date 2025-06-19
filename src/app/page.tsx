import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex-grow w-full h-full max-w-3xl mx-auto flex justify-center flex-col items-center">
      <h1 className="font-bold text-center my-8 text-3xl">
        Gérer efficacement votre stock
      </h1>
      <Link href="/legal" className="btn btn-primary">
        <span>Voir le stock</span>
        <ChevronRightIcon className="size-6 " />
      </Link>
    </main>
  );
}
