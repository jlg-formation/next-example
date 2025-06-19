import { Article } from "@/interfaces/Article";
import ArticleManager from "./_components/ArticleManager";

const url = "http://localhost:3333/api/articles";

const getArticles = async () => {
  const response = await fetch(url);
  const articles: Article[] = await response.json();
  return articles;
};

export default async function Stock() {
  return (
    <main className="main">
      <h1 className="title">Liste des articles</h1>
      <ArticleManager articles={await getArticles()} />
    </main>
  );
}
