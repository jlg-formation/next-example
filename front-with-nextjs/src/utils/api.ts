import { Article, NewArticle } from "@/interfaces/Article";

const url = "http://localhost:3333/api/articles";

export const getArticles = async () => {
  const response = await fetch(url);
  const articles: Article[] = await response.json();
  return articles;
};

export const addArticle = async (newArticle: NewArticle) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });
};
