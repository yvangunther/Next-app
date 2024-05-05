import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    description: "",
    typeDeLieu: "",
    nomDuLieu: "",
    adresse: "",
    ville: "",
    codePostal: "",
    pays: "",
    typeDeCuisine: "",
    nombreDEtoiles: "",
    prixMoyen: "",
    courantArtistique: "",
    typeDArt: "",
    typeDeBar: "",
    typeDeParc: "",
    publicOuPrive: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/places/${id}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching place data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette donnée ?")) {
      axios
        .delete(`/edit/{id}`)
        .then(() => {
          console.log("Data deleted successfully");
          router.push("/");
        })
        .catch((error) => {
          console.error("Error deleting place data:", error);
        });
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4">Édition de la donnée {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <ul>
            <li key={id} className="mb-4">
              {formData.description && (
                <p className="text-gray-800">
                  <span className="font-bold">Description:</span>{" "}
                  {formData.description}
                </p>
              )}
              {formData.typeDeLieu && (
                <p className="text-gray-800">
                  <span className="font-bold">Type de Lieu:</span>{" "}
                  {formData.typeDeLieu}
                </p>
              )}
              {/* Continuez à afficher les autres champs de formData */}
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sauvegarder
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
}
