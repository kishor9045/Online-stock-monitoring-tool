import {Schema} from "mongoose";

const PositionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: String,
        enum: ["MIS", "CNC"],
        required: true
    },
    stockName: {
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
    price: Number,
}, {
    timestamps: true
})

export default PositionSchema;