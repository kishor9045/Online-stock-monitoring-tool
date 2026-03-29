import mongoose from "mongoose";
import PositionSchema from "../Schemas/PositionSchema.js";

const Position = mongoose.model("Position", PositionSchema);

export default Position;