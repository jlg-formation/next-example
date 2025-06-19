"use client";

import Link from "next/link";
import { useState } from "react";

export default function ArticleManager() {
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <div>
      <nav>
        <button>Refresh</button>
        <Link href="./create">Ajouter</Link>
        <button>Supprimer</button>
      </nav>
      <div className="h-8 font-bold flex items-center">{errorMsg}</div>
      <table>
        <thead>
          <tr>
            <th className="name">Nom</th>
            <th className="price">Prix</th>
            <th className="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">3.99 €</td>
            <td className="qty">123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
