"use client";

import { Article } from "@/interfaces/Article";
import {
  ArrowPathIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const articleList: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Pelle", price: 5, qty: 46 },
];

export default function ArticleManager() {
  const [errorMsg] = useState("");
  // const [selectedArticles, setselectedArticles] = useState(new Set());
  const [articles] = useState(articleList);

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
          {articles.map((a) => {
            return (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
