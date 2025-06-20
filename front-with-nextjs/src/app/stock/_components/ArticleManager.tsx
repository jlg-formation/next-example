"use client";

import AsyncButton from "@/components/AsyncButton";
import { Article } from "@/interfaces/Article";
import { getArticles } from "@/utils/api";
import { sleep } from "@/utils/sleep";
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
  const [selectedArticles, setSelectedArticles] = useState(new Set());

  const pathname = usePathname();

  const handleRefresh = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  const handleRemove = async () => {
    await sleep(1000);
  };

  const handleSelect = (a: Article) => {
    const set = new Set(selectedArticles);
    setSelectedArticles(set);
    if (set.has(a)) {
      set.delete(a);
      return;
    }
    set.add(a);
  };

  return (
    <div>
      <nav className="flex gap-1">
        <AsyncButton
          title="Rafraîchir"
          action={handleRefresh}
          icon={<ArrowPathIcon className="size-6" />}
        ></AsyncButton>
        <Link title="Ajouter" href={pathname + "/create"} className="btn">
          <PlusIcon className="size-6" />
        </Link>
        <AsyncButton
          title="Supprimer"
          action={handleRemove}
          icon={<TrashIcon className="size-6" />}
        ></AsyncButton>
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
              <tr
                key={a.id}
                className={selectedArticles.has(a) ? "selected" : ""}
                onClick={() => handleSelect(a)}
              >
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
