"use client"

import AsyncButton from "@/components/AsyncButton"
import { useArticles } from "@/contexts/ArticleContext"
import { Article } from "@/interfaces/Article"
import { ArrowPathIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function ArticleManager() {
  const [errorMsg] = useState("")
  const { articles, loading, error, reload, remove } = useArticles()
  const [selectedArticles, setSelectedArticles] = useState(
    new Set<Article["id"]>(),
  )

  const pathname = usePathname()

  const handleRefresh = async () => {
    await reload()
  }

  const handleRemove = async () => {
    await remove(selectedArticles)
    await reload()
    setSelectedArticles(new Set())
  }

  const handleSelect = (id: Article["id"]) => {
    const set = new Set(selectedArticles)
    setSelectedArticles(set)
    set.has(id) ? set.delete(id) : set.add(id)
  }

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
        {selectedArticles.size > 0 && (
          <AsyncButton
            title="Supprimer"
            action={handleRemove}
            icon={<TrashIcon className="size-6" />}
          ></AsyncButton>
        )}
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
          {articles ? (
            articles.map((a) => {
              return (
                <tr
                  key={a.id}
                  className={selectedArticles.has(a.id) ? "selected" : ""}
                  onClick={() => handleSelect(a.id)}
                >
                  <td className="name">{a.name}</td>
                  <td className="price">{a.price} €</td>
                  <td className="qty">{a.qty}</td>
                </tr>
              )
            })
          ) : loading ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3}>Error: {error}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
