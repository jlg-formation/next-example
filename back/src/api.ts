import { Router, type Request, type Response, json } from "express";
import type { Article, NewArticle } from "./interfaces/article";

const sleep = (delay: number) => new Promise((r) => setTimeout(r, delay));

export const generateId = (): string => {
  return Date.now() + "_" + Math.round(Math.random() * 1e12);
};

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.66, qty: 123 },
  { id: "a2", name: "Marteau", price: 3, qty: 78 },
];

const app = Router();

const date = (req: Request, res: Response) => {
  res.json({ date: new Date() });
};

app.get("/date", date);

app.use(async (req, res, next) => {
  await sleep(1000);
  next();
});

app.get("/articles", async (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.delete("/articles/:id", (req, res) => {
  const id = req.params.id;
  articles = articles.filter((a) => a.id !== id);
  res.status(204).end();
});

export default app;
