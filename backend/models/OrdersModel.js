import mongoose from "mongoose"
import OrdersSchema from "../Schemas/OrdersSchema.js";

const Order = mongoose.model("Order", OrdersSchema);

export default Order;