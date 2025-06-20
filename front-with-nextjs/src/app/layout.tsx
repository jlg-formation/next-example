import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Image from "next/image"
import "./globals.css"
import Link from "next/link"

const geist = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gestion Stock",
  description: "Gestion efficace de votre stock",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        <div className="flex flex-col min-h-screen justify-between">
          <header className="flex items-center bg-jlg-50 h-12">
            <Link
              href="/"
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
            </Link>
          </header>
          <div className="flex flex-col flex-grow">{children}</div>
          <footer className="flex items-center bg-jlg-50 h-12 justify-center">
            <Link href="/legal" className="hover:underline">
              Mentions Légales
            </Link>
          </footer>
        </div>
      </body>
    </html>
  )
}
