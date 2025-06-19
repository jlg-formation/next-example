"use client";

import {
  ArrowPathIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ArticleManager() {
  const [errorMsg] = useState("");
  // const [selectedArticles, setselectedArticles] = useState(new Set());

  const pathname = usePathname();
  return (
    <div>
      <nav className="flex gap-1">
        <button className="btn">
          <ArrowPathIcon className="size-6" />
        </button>
        <Link href={pathname + "/create"} className="btn">
          <PlusIcon className="size-6" />
        </Link>
        <button className="btn">
          <TrashIcon className="size-6" />
        </button>
      </nav>
      <div className="h-8 font-bold flex items-center">{errorMsg}</div>
      <table className="table">
        <thead>
          <tr>
            <th className="name">Nom</th>
            <th className="price">Prix</th>
            <th className="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
