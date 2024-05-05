import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");

  const handleSubmit = (formData) => {
    axios
      .get("/search", { params: formData })
      .then((response) => {
        setSearchResults(response.data);
        if (response.data.length === 0) {
          setSearchMessage("Aucun lieu ne correspond à la recherche.");
        } else {
          setSearchMessage("");
        }
      })
      .catch((error) => {
        console.error("Error searching data:", error);
      });
  };

  return (
    <div>
      <h1>Recherche de lieux</h1>
      <Formik
        initialValues={{
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
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <label>
              Type de lieu:
              <Field component="select" name="typeDeLieu">
                <option value="">Sélectionnez un type de lieu</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Musée">Musée</option>
                <option value="Bar">Bar</option>
                <option value="Parc">Parc</option>
              </Field>
            </label>
            <label>
              Nom du lieu:
              <Field name="nomDuLieu" />
            </label>
            <label>
              Adresse:
              <Field name="adresse" />
            </label>
            <label>
              Ville:
              <Field name="ville" />
            </label>
            <label>
              Code postal:
              <Field name="codePostal" />
            </label>
            <label>
              Pays:
              <Field name="pays" />
            </label>
            {/* Champs supplémentaires pour chaque type de lieu */}
            {values.typeDeLieu === "Restaurant" && (
              <>
                <label>
                  Type de cuisine:
                  <Field name="typeDeCuisine" />
                </label>
                <label>
                  Nombre d'étoiles:
                  <Field type="number" name="nombreDEtoiles" />
                </label>
                <label>
                  Prix moyen:
                  <Field type="number" name="prixMoyen" />
                </label>
              </>
            )}
            {values.typeDeLieu === "Musée" && (
              <>
                <label>
                  Courant artistique:
                  <Field name="courantArtistique" />
                </label>
                <label>
                  Type d'art:
                  <Field name="typeDArt" />
                </label>
              </>
            )}
            {values.typeDeLieu === "Bar" && (
              <>
                <label>
                  Type de bar:
                  <Field name="typeDeBar" />
                </label>
                <label>
                  Prix moyen:
                  <Field type="number" name="prixMoyen" />
                </label>
              </>
            )}
            {values.typeDeLieu === "Parc" && (
              <>
                <label>
                  Type de parc:
                  <Field name="typeDeParc" />
                </label>
                <label>
                  Public ou privé:
                  <Field component="select" name="publicOuPrive">
                    <option value="">Sélectionnez une option</option>
                    <option value="Public">Public</option>
                    <option value="Privé">Privé</option>
                  </Field>
                </label>
              </>
            )}
            <button type="submit">Rechercher</button>
          </Form>
        )}
      </Formik>
      {searchMessage && <p>{searchMessage}</p>}
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
