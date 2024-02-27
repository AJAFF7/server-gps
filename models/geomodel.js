import mongoose from "mongoose";

const geolocationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Geo_Model1 = mongoose.model("Geolocation", geolocationSchema);
