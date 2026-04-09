import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  const getStatusClass = (status) => {
    switch (status) {
      case "Đang xử lý": return "status-processing";
      case "Đang chuẩn bị": return "status-preparing";
      case "Đang giao hàng": return "status-delivering";
      case "Đã giao": return "status-delivered";
      default: return "status-processing";
    }
  }

  return (
    <div className='my-orders'>
      <h2>Đơn hàng của tôi</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <div className="order-icon">
                <img src={assets.bag_icon} alt="" />
              </div>
              <div className="order-info">
                <p className="order-items">
                  {order.items.map((item, idx) => {
                    if (idx === order.items.length - 1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
                <p className="order-date">
                  {new Date(order.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <p className="order-amount">${order.amount}.00</p>
              <p className="order-count">Số lượng: {order.items.length}</p>
              <p className={`order-status ${getStatusClass(order.status)}`}>
                <span className="status-dot"></span>
                {order.status}
              </p>
              <button onClick={fetchOrders} className="track-btn">Làm mới</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
