import { createRoute } from "@/api/createRoute";
import { placeModel } from "@/database/models/placeModel";

const handler = createRoute(async (req, res) => {
  if (req.method === "GET") {
    const places = await placeModel.find({});
    res.send(places);
    return;
  }

  if (req.method === "POST") {
    const newAddress = new placeModel(req.body);
    await newAddress.save();
    res.send(newAddress);
    return;
  }

  if (req.method === "DELETE") {
    try {
      const place = await placeModel.findById(id);

      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }

      await place.deleteOne();

      return res.status(200).json({ message: "Place deleted successfully" });
    } catch (error) {
      console.error("Error deleting place:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
});

export default handler;
