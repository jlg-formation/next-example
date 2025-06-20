import { getArticles } from "@/utils/api";
import ArticleManager from "./_components/ArticleManager";

export default async function Stock() {
  console.log("Rendering Stock");
  return (
    <main className="main">
      <h1 className="title">Liste des articles</h1>
      <ArticleManager initialArticles={await getArticles()} />
    </main>
  );
}
