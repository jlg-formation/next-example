"use server";

import { Article, NewArticle } from "@/interfaces/Article";

const url = "http://localhost:3333/api/articles";

export const getArticles = async () => {
  console.log(`getArticles from ${url}`);
  const response = await fetch(url, {
    cache: "no-store",
  });
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

export const removeArticles = async (ids: Set<Article["id"]>) => {
  console.log("ids: ", ids);
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([...ids]),
  });
};
