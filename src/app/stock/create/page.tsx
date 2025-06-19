import { PlusIcon } from "@heroicons/react/24/solid";

export default function StockCreate() {
  return (
    <main className="main">
      <h1 className="title">Ajout d'un article</h1>
      <form className="form">
        <label>
          <span>Nom</span>
          <input type="text" />
          <span className="error">Champ obligatoire</span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <div className="h-8"></div>
        <div className=" flex flex-col">
          <button className="btn btn-primary">
            <PlusIcon className="size-6" />
            <span>Ajouter</span>
          </button>
        </div>
      </form>
    </main>
  );
}
