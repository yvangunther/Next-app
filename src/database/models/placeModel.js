import { placeSchema } from "@/database/schema/placeSchema";
import mongoose from "mongoose";

export const placeModel =
  mongoose.models.Places || mongoose.model("Places", placeSchema);
