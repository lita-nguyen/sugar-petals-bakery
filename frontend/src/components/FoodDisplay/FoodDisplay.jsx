import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { foodlist } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h1>Top cakes near you</h1>
        <div className="food-display-list">
            {foodlist.map((item,index) => {
                if (category==="All" || category === item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
