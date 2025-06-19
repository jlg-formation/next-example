import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main flex-grow justify-center ">
      <h1 className="font-bold text-center my-8 text-3xl">
        Oups ! Page non trouvée (erreur 404).
      </h1>
      <Link href="/" className="btn btn-primary">
        <HomeIcon className="size-6 " />
        <span>Accueil</span>
      </Link>
    </main>
  );
}
