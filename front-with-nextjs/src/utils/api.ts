import { Article } from "@/interfaces/Article";

const url = "http://localhost:3333/api/articles";

export const getArticles = async () => {
  const response = await fetch(url);
  const articles: Article[] = await response.json();
  return articles;
};
