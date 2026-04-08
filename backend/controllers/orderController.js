import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing user order (COD)
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await newOrder.save();

        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({
            success: true,
            message: "Order Placed Successfully",
            orderId: newOrder._id
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { placeOrder };