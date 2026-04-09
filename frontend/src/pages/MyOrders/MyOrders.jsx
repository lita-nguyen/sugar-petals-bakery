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
      case "Processing": return "status-processing";
      case "Preparing": return "status-preparing";
      case "Out for Delivery": return "status-delivering";
      case "Delivered": return "status-delivered";
      default: return "status-processing";
    }
  }

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
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
                  {new Date(order.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <p className="order-amount">${order.amount}.00</p>
              <p className="order-count">Items: {order.items.length}</p>
              <p className={`order-status ${getStatusClass(order.status)}`}>
                <span className="status-dot"></span>
                {order.status}
              </p>
              <button onClick={fetchOrders} className="track-btn">Refresh</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
