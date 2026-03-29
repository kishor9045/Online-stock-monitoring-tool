import {model} from "mongoose";
import WatchlistSchema from "../Schemas/WatchlistSchema.js";

const Watchlist = model("Watchlist", WatchlistSchema);

export default Watchlist;