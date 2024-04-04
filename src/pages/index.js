import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";

export default function Home() {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/latestData")
      .then((response) => {
        setLatestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Dernières données sauvegardées</h1>
      <ul>
        {latestData.map((item) => (
          <li key={item._id}>
            {item.nomDeRue}, {item.nomDeVille}, {item.nomDuPays},{" "}
            {item.numeroDeRue}
          </li>
        ))}
      </ul>
    </div>
  );
}
