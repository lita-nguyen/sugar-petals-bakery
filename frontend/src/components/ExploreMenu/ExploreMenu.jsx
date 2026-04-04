import React from 'react'
import './ExploreMenu.css'
import { menulist } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Explore our diverse menu of delicious baked goods and sweet treats. 
        From classic pastries to delightful desserts, pick your favorite and enjoy the perfect flavor today!
      </p>
      <div className="explore-menu-list">
        {menulist.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu
