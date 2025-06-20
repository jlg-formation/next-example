"use client";
import AsyncButton from "@/components/AsyncButton";
import { NewArticle } from "@/interfaces/Article";
import { addArticle } from "@/utils/api";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function AddArticleForm() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState("0");
  const [qty, setQty] = useState("1");

  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const nameErrorMsg = useMemo(() => {
    console.log("compute nameErrorMsg");
    if (name === "") {
      return "Champ obligatoire";
    }
    return "";
  }, [name]);

  const priceErrorMsg = useMemo(() => {
    console.log("compute priceErrorMsg:", price);
    if (price === "") {
      return "Champ obligatoire";
    }
    return "";
  }, [price]);

  const qtyErrorMsg = useMemo(() => {
    console.log("compute qtyErrorMsg:", qty);
    if (qty === "") {
      return "Champ obligatoire";
    }
    return "";
  }, [qty]);

  const handleSubmit = async () => {
    try {
      console.log("submit");
      console.log("name: ", name);
      if (name === "bad") {
        setErrorMsg('Un article ne peut pas avoir "bad" pour nom.');
        return;
      }

      const newArticle: NewArticle = {
        name: name,
        price: parseFloat(price),
        qty: parseInt(qty, 10),
      };

      await addArticle(newArticle);
      router.push("/stock");
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <form className="form">
      <label>
        <span>Nom</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error">{nameErrorMsg}</span>
      </label>
      <label>
        <span>Prix</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className="error">{priceErrorMsg}</span>
      </label>
      <label>
        <span>Quantité</span>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <span className="error">{qtyErrorMsg}</span>
      </label>
      <div className="h-12 font-bold flex items-center justify-center">
        {errorMsg}
      </div>
      <div className=" flex flex-col">
        <AsyncButton
          className="btn btn-primary"
          action={handleSubmit}
          icon={<PlusIcon className="size-6" />}
        >
          Ajouter
        </AsyncButton>
      </div>
    </form>
  );
}
