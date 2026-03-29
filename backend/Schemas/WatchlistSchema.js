import {Schema} from "mongoose";

const WatchlistSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: {
        type: Number
    },
    percent: {
        type: String
    },
    isDown: {
        type: Boolean
    }
});

export default WatchlistSchema;