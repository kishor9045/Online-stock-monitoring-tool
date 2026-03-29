import mongoose from "mongoose";
import HoldingsSchema from "../Schemas/HoldingsSchema.js";

const Holdings = mongoose.model("Holding", HoldingsSchema);

export default Holdings;