import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    pays: "",
    ville: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("/api/search", { params: formData })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error searching data:", error);
      });
  };

  return (
    <div>
      <Header />
      <h1>Recherche de lieux</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pays"
          placeholder="Pays"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ville"
          placeholder="Ville"
          onChange={handleChange}
        />
        <button type="submit">Rechercher</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <li key={item._id}>
            {item.nomDeRue}, {item.nomDeVille}, {item.nomDuPays},{" "}
            {item.numeroDeRue}
          </li>
        ))}
      </ul>
    </div>
  );
}
