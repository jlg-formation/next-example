"use client";

import AsyncButton from "@/components/AsyncButton";
import { Article } from "@/interfaces/Article";
import { getArticles } from "@/utils/api";
import {
  ArrowPathIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ArticleManager({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [errorMsg] = useState("");
  const [articles, setArticles] = useState(initialArticles);

  const pathname = usePathname();

  const handleClick = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  return (
    <div>
      <nav className="flex gap-1">
        <AsyncButton
          action={handleClick}
          icon={<ArrowPathIcon className="size-6" />}
        ></AsyncButton>
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
