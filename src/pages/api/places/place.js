import { placeModel } from "../../database/models/placeModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const places = await placeModel.find({});
      res.status(200).json(places);
    } catch (error) {
      console.error("Error fetching places:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
