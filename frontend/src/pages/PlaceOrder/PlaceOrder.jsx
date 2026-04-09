import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
<<<<<<< HEAD
=======
import { useState } from 'react'
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

<<<<<<< HEAD
  const {getTotalCartAmount, token, foodlist, cartItems, url, setCartItems} = useContext(StoreContext)

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
=======
  const {getTotalCartAmount,token,foodlist,cartItems,url} = useContext(StoreContext)
  const navigate = useNavigate()

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
<<<<<<< HEAD
    setData(data => ({...data, [name]: value}))
=======
    setData(data=>({...data,[name]:value}))
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
<<<<<<< HEAD
    foodlist.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, {headers: {token}});
    if (response.data.success) {
      // Xóa giỏ hàng trên frontend
      setCartItems({});
      alert("Đặt hàng thành công! 🎉");
      navigate("/myorders");
    }
    else {
      alert("Lỗi: " + response.data.message);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])
=======
    foodlist.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if (response.data.success) {
      alert("Order placed successfully!");
      if (typeof setCartItems === "function") {
        setCartItems({});
      }
      navigate('/');
    }
    else {
      alert("Error");
    }
  }
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <div className="multi-fields">
<<<<<<< HEAD
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Họ' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Tên' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Địa chỉ' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Thành phố' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='Quận/Huyện' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Mã bưu điện' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Quốc gia' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Số điện thoại' />
=======
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text"placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text"placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text"placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text"placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text"placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text"placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tạm tính</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
<<<<<<< HEAD
          <button type='submit'>ĐẶT HÀNG</button>
=======
          <button type='submit'>PROCEED TO PAYMENT</button>
>>>>>>> a3610f3193046d40373a7aa75c6dfc2a9ef4a079
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
