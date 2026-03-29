import { Schema } from "mongoose";

const HoldingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    stockName: {
        type: String,
        required: true
    },
    exchange: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    avg: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    net: {
        type: String
    },
    day: {
        type:String
    },
})

export default HoldingSchema;