import { Router } from "express";
import { getHoldings, getPositions, getOrders, getWatchlist, deleteWatchlist, postOrders, signup, login, homeVerifyRoute, refreshToken, logout } from "../controllers/controller.js";
import authMiddleware from "../middlewares/middleware.js";

const router = Router();

router.get("/getHoldings", authMiddleware, getHoldings);
router.get("/getPositions", authMiddleware, getPositions);
router.get("/getOrders", authMiddleware, getOrders);
router.get("/getWatchlist", getWatchlist);
router.delete("/deleteWatchlist", deleteWatchlist);
router.post("/orders", postOrders);
router.post("/signup", signup);
router.post("/login", login);
router.post("/", homeVerifyRoute);
router.post("/refreshToken", refreshToken);
router.post("/logout", logout);

export default router;