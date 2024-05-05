import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    await axios.post("/api/places", values);
    router.push("/");
  };

  return (
    <div>
      <div className="min-h-96">
        <h1>Créer un nouveau lieu</h1>
        <Formik noValidate initialValues={{}} onSubmit={handleSubmit}>
          {({ values: formData }) => (
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
              {formData.typeDeLieu === "Restaurant" && (
                <>
                  <label>
                    Type de cuisine:
                    <Field name="typeDeCuisine" />
                  </label>
                  <label>
                    {"Nombre d'étoiles:"}
                    <Field type="number" name="nombreDEtoiles" />
                  </label>
                  <label>
                    Prix moyen:
                    <Field type="number" name="prixMoyen" />
                  </label>
                </>
              )}
              {formData.typeDeLieu === "Musée" && (
                <>
                  <label>
                    Courant artistique:
                    <Field name="courantArtistique" />
                  </label>
                  <label>
                    {"Type d'art:"}
                    <Field name="typeDArt" />
                  </label>
                </>
              )}
              {formData.typeDeLieu === "Bar" && (
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
              {formData.typeDeLieu === "Parc" && (
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
              <button type="submit">Créer</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Create;
