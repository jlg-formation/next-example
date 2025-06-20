import LoadingCircle from "@/components/LoadingCircle"

export default function LoadingStock() {
  return (
    <main className="main">
      <h1 className="title">Chargement des articles</h1>
      <LoadingCircle />
    </main>
  )
}
