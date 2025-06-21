"use client"

// ArticleContext.tsx
import { Article } from "@/interfaces/Article"
import { getArticles, removeArticles } from "@/utils/api"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

export const ArticleContext = createContext<{
  articles: Article[] | undefined
  loading: boolean
  error: string
  reload: () => Promise<void>
  remove: (ids: Set<Article["id"]>) => Promise<void>
}>({
  articles: undefined,
  loading: false,
  error: "",
  reload: Promise.resolve,
  remove: Promise.resolve,
})

export function ArticleProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const reload = useCallback(async () => {
    try {
      const list = await getArticles()
      setArticles(list)
    } catch (err) {
      console.log("err: ", err)
      setError("Probleme de chargement")
    } finally {
      setLoading(false)
    }
  }, [])

  const remove = useCallback(async (ids: Set<Article["id"]>) => {
    await removeArticles(ids)
  }, [])

  useEffect(() => {
    console.log("ArticleProvider: use effect")
    ;(async () => {
      if (articles === undefined) {
        console.log("ArticleProvider: initial reload")
        reload()
      }
    })()
  }, [reload, articles])

  return (
    <ArticleContext.Provider
      value={{ articles, loading, error, reload, remove }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

// useArticles
export function useArticles() {
  return useContext(ArticleContext)
}
