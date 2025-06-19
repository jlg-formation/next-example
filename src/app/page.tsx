import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="flex items-center bg-jlg-50 h-12">
        <a
          href="#"
          className="flex items-center gap-2 px-2 hover:underline h-10"
        >
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Gestion Stock Logo"
            width={16 * 2.5}
            height={16 * 2.5}
            priority
          />
          <span className="font-bold text-xl">Gestion Stock</span>
        </a>
      </header>
      <main>Corps principal de la page</main>
      <footer className="flex items-center bg-jlg-50 h-12 justify-center">
        <a href="#" className="hover:underline">
          Mentions Légales
        </a>
      </footer>
    </div>
  );
}
