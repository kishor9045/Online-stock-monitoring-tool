import {Schema} from "mongoose";

const OrdersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
    exchange: {
        type:String,
        enum: ["NSE", "BSE"],
        default: "NSE"
    },
    price: {
        type: Number
    },
    product: {
        type: String,
        enum: ["CNC", "MIS"],
        default: "CNC"
    },
    mode: {
        type:String,
        enum: ["BUY", "SELL"],
        required: true
    },
    status: {
        type: String,
        enum: ["OPEN", "COMPLETE", "CANCELLED", "REJECTED"],
        default: "OPEN"
    }
}, {
    timestamps: true
});

export default OrdersSchema;