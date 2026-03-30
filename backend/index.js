import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";
const app = express();
const PORT = process.env.PORT || 8000;
const mongoURL = process.env.MONGODB_STRING;

main().then(() => {
    console.log("connection successful to DB!");
}).catch((err) => {
    console.log("caught an error while connection!", err);
})

async function main() {
    await mongoose.connect(mongoURL);
}

const corsOptions = {
    origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods:["GET, POST", "PUT", "DELETE"],
    optionsSuccessStatus: 201,
    credentials: true,
    preflightContinue: false
}
app.set("trust proxy", 1);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", router);

app.use((req, res, next) => {
  res.status(404).send("Page Not Found!");
})

app.use((err, req, res, next) => {
    let {status=500, message="caught some error"} = err;
    console.log("error: ", status, message);
    res.status(500).send(status, message);
})

app.listen(PORT, () => {
    console.log(`Listening to the port http://localhost:${PORT}`);
})