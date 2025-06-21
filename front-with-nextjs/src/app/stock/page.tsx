import { ArticleProvider } from "@/contexts/ArticleContext"
import ArticleManager from "./_components/ArticleManager"

export default async function Stock() {
  console.log("Rendering Stock")
  return (
    <main className="main">
      <h1 className="title">Liste des articles</h1>
      <ArticleProvider>
        <ArticleManager />
      </ArticleProvider>
    </main>
  )
}
