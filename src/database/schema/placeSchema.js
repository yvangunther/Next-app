import { Schema } from "mongoose";

export const placeSchema = new Schema({
  typeDeLieu: {
    type: String,
    required: true,
  },
  nomDuLieu: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  pays: {
    type: String,
    required: true,
  },

  typeDeCuisine: String,
  nombreDEtoiles: Number,
  prixMoyen: Number,
  courantArtistique: String,
  typeDArt: String,
  typeDeBar: String,
  typeDeParc: String,
  publicOuPrive: String,
});
