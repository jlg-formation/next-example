import { Article } from "@/interfaces/Article";
import ArticleManager from "./_components/ArticleManager";
import { sleep } from "@/utils/sleep";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Pelle", price: 5, qty: 46 },
];

const getArticles = async () => {
  await sleep(2000);
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
