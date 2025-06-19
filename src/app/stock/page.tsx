import ArticleManager from "./_components/ArticleManager";

export default function Stock() {
  return (
    <main className="w-full max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="font-bold text-center my-8 text-3xl">
        Liste des articles
      </h1>
      <ArticleManager />
    </main>
  );
}
