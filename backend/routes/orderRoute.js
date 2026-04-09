import express from "express"
import authMiddleware from "../middleware/auth.js"
<<<<<<< HEAD
import { placeOrder, userOrders, listOrders, updateStatus } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/userorders", authMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter;
=======
import { placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
