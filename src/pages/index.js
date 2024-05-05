import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Importez Link depuis Next.js

export default function Home() {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/places")
      .then((response) => {
        setLatestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Dernières données sauvegardées
      </h1>
      <ul>
        {latestData.map((item) => (
          <li key={item._id} className="mb-4">
            {item.description && (
              <p className="text-gray-800">
                <span className="font-bold">Description:</span>{" "}
                {item.description}
              </p>
            )}
            {item.typeDeLieu && (
              <p className="text-gray-800">
                <span className="font-bold">Type de Lieu:</span>{" "}
                {item.typeDeLieu}
              </p>
            )}
            {item.nomDuLieu && (
              <p className="text-gray-800">
                <span className="font-bold">Nom du Lieu:</span> {item.nomDuLieu}
              </p>
            )}
            {item.adresse && (
              <p className="text-gray-800">
                <span className="font-bold">Adresse:</span> {item.adresse}
              </p>
            )}
            {item.ville && (
              <p className="text-gray-800">
                <span className="font-bold">Ville:</span> {item.ville}
              </p>
            )}
            {item.codePostal && (
              <p className="text-gray-800">
                <span className="font-bold">Code Postal:</span>{" "}
                {item.codePostal}
              </p>
            )}
            {item.pays && (
              <p className="text-gray-800">
                <span className="font-bold">Pays:</span> {item.pays}
              </p>
            )}
            {item.typeDeCuisine && (
              <p className="text-gray-800">
                <span className="font-bold">Type de Cuisine:</span>{" "}
                {item.typeDeCuisine}
              </p>
            )}
            {item.nombreDEtoiles && (
              <p className="text-gray-800">
                <span className="font-bold">Nombre d'Etoiles:</span>{" "}
                {item.nombreDEtoiles}
              </p>
            )}
            {item.prixMoyen && (
              <p className="text-gray-800">
                <span className="font-bold">Prix Moyen:</span> {item.prixMoyen}
              </p>
            )}
            {item.courantArtistique && (
              <p className="text-gray-800">
                <span className="font-bold">Courant Artistique:</span>{" "}
                {item.courantArtistique}
              </p>
            )}
            {item.typeDArt && (
              <p className="text-gray-800">
                <span className="font-bold">Type d'Art:</span> {item.typeDArt}
              </p>
            )}
            {item.typeDeBar && (
              <p className="text-gray-800">
                <span className="font-bold">Type de Bar:</span> {item.typeDeBar}
              </p>
            )}
            {item.typeDeParc && (
              <p className="text-gray-800">
                <span className="font-bold">Type de Parc:</span>{" "}
                {item.typeDeParc}
              </p>
            )}
            {item.publicOuPrive && (
              <p className="text-gray-800">
                <span className="font-bold">Public ou Privé:</span>{" "}
                {item.publicOuPrive}
              </p>
            )}
            <Link
              className="text-blue-500 hover:underline"
              href={`/edit/${item._id}`}
            >
              Editer
            </Link>{" "}
            |{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
