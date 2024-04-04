import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";

const Create = () => {
  const [formData, setFormData] = useState({
    nomDeRue: "",
    nomDeVille: "",
    nomDuPays: "",
    numeroDeRue: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation des champs
    if (
      !formData.nomDeRue ||
      !formData.nomDeVille ||
      !formData.nomDuPays ||
      !formData.numeroDeRue
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // Envoyer les données au serveur pour traitement ou validation
      const response = await axios.post("/api/createPlace", formData);
      console.log("Response from server:", response.data);

      // Réinitialisation du formulaire après la soumission réussie
      setFormData({
        nomDeRue: "",
        nomDeVille: "",
        nomDuPays: "",
        numeroDeRue: "",
      });

      alert("Lieu ajouté avec succès !");
    } catch (error) {
      console.error("Error creating place:", error);
      alert(
        "Une erreur est survenue lors de la création du lieu. Veuillez réessayer."
      );
    }
  };

  return (
    <div>
      <Header />
      <h1>Créer un nouveau lieu</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nomDeRue"
          placeholder="Nom de rue"
          value={formData.nomDeRue}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nomDeVille"
          placeholder="Nom de ville"
          value={formData.nomDeVille}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nomDuPays"
          placeholder="Nom du pays"
          value={formData.nomDuPays}
          onChange={handleChange}
        />
        <input
          type="text"
          name="numeroDeRue"
          placeholder="Numéro de rue"
          value={formData.numeroDeRue}
          onChange={handleChange}
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default Create;
