import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Đặt hàng
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();

        // Xóa giỏ hàng sau khi đặt hàng thành công
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Đặt hàng thành công" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Lỗi khi đặt hàng" });
    }
}

// Lấy đơn hàng của user
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Lấy tất cả đơn hàng (admin)
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Cập nhật trạng thái đơn hàng (admin)
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Cập nhật trạng thái thành công" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { placeOrder, userOrders, listOrders, updateStatus }
