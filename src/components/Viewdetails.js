import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
// import axios from 'axios'

function Viewdetails() {
  const [restmeal, setrestmeal] = useState([{
    "_id": "",
    "menu_id": "",
    "menu_name": "",
    "description": "",
    "restaurant_id": "",
    "menu_image": "",
    "menu_type": "",
    "menu_price": ""
  }])
  const [restinfo, setrestinfo] = useState(
    [
      {
        "_id": "",
        "restaurant_id": "",
        "restaurant_name": "",
        "location_id": 9,
        "state_id": "",
        "address": "",
        "restaurant_thumb": "",
        "average_rating": "",
        "rating_text": "",
        "cost": "",
        "contact_number": "",
      }
    ]
  )

  useEffect(() => {
    let restid = sessionStorage.getItem(`restid`);
    console.log(restid);
    // let url = `http://localhost:9632/findmeal/${restid}`
    let url = `https://zomato-backend-uv1y.onrender.com/findmeal/${restid}`
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setrestmeal(data)
      }
      )
  }, [])

  useEffect(() => {
    let restid = sessionStorage.getItem(`restid`);
    console.log(restid);
    // let url = `http://localhost:9632/details/${restid}`
    let url = `https://zomato-backend-uv1y.onrender.com/details/${restid}`
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setrestinfo(data)
      }
      )
  }, [])
  console.log(restinfo);

  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement('script')
  //     script.src = src
  //     script.onload = () => {
  //       resolve(true)
  //     }
  //     script.onerror = () => {
  //       resolve(false)
  //     }
  //     document.body.appendChild(script)
  //   })
  // }

  // const [payment_id,setpayment_id] = useState({})
  // const [order_id,setorder_id] = useState({})
  // const [signature,setsignature] = useState({})

  useEffect(() => {
    let meal = document.getElementById('meal')
    let payment = async (event) => {
      if (event.target.id === "buy") {

        console.log(event.target.className);
        let sel = event.target.closest('SECTION').id
        console.log(sel);
        sessionStorage.setItem('cost', event.target.className)
        sessionStorage.setItem('buyit', sel)
        window.location = '/checkout'

      }
      else if (event.target.id === "cart") {
        console.log(event.target.className);
        let mycart = sessionStorage.getItem("cart");

        if (!mycart) {
          let xx = { "cartmenu": [Number(event.target.className)] }
          sessionStorage.setItem('cart', JSON.stringify(xx))
          console.log("item added to cart")
          return;
        }
        else if (mycart) {
          let xx = JSON.parse(sessionStorage.getItem("cart"))
          // xx.cartmenu.push(event.target.className)
          xx.cartmenu.push(Number(event.target.className))
          sessionStorage.setItem('cart', JSON.stringify(xx))
          console.log(xx);

        }
      }
    }

    meal.addEventListener('click', payment)
    return () => { meal.removeEventListener('click', payment) }
  })

  return (
    <Fragment>
      <Header />
      <div className="rest_detial">
        <div className="container rest_detail_info">
          {
            restinfo.map((data) => {
              return (
                <div className="|">
                  <div className="rest_info">
                    <h2>{data.restaurant_name}</h2>
                    <p>{data.address}</p>
                    <p><i class="fa-sharp fa-solid fa-phone"></i> {data.contact_number}</p>
                    <p className="stat">{data.average_rating} <i class="fa-sharp fa-solid fa-star"></i> </p>
                    <h4 className="rating">{data.rating_text}</h4>
                  </div>

                  <div className="rest_image_div"><img className='rest_image' src={data.restaurant_thumb} alt="rest_images" /></div>
                </div>
              )
            })
          }
          {/* <div className="rest_info">
              <h2>kgf</h2>
              <p>Burger, Fast Food, Biryani, Desserts, Beverages</p>
              <p>Park Town, Chennai</p>
              <p><i class="fa-sharp fa-solid fa-phone"></i> 9025191046</p>
              <p className="stat">4.5 <i class="fa-sharp fa-solid fa-star"></i> </p>
              <h4 className="rating">good</h4>
            </div>
            <div className="rest_image_div"><img className='rest_image' src="https://b.zmtcdn.com/data/pictures/chains/6/120976/517f929243a8a987437661453a5b45e0_featured_v2.jpg" alt="rest_images" /></div> */}
        </div>
        <div className="container">
          <hr />
          <h1 className="overview">Order Online</h1>
          <hr />
        </div>
        <div className="container">
          <div className="meal" id='meal'  >
            {
              restmeal.map((data) => {
                return (
                  <section id={data.menu_id}>
                    <img src={data.menu_image} alt="" />
                    <div className="foodinfo">
                      <h1>{data.menu_name}</h1>
                      <p>{data.description}</p>
                      <h6> {data.menu_type}</h6>
                      <div className="buyfood">
                        <button id='buy' className={data.menu_price}>₹ {data.menu_price}</button>
                        <button id='cart' className={data.menu_id}>ADD TO CART</button>
                      </div>
                    </div>
                    <hr />
                  </section>
                )
              })
            }
            {/* <section>
              <img src="https://b.zmtcdn.com/data/dish_photos/34d/7ab40b39dd655da9c68e52ed5388a34d.jpg" alt="" />
              <div className="foodinfo">
                <h1>Large Classic Cheesy Pizza With Tandoori Paneer</h1>
                <p>All time Favorite Large Pizza with assorted Toppings and Paneer Cubes</p>
                <h6>vegetarian</h6>
                <div className="buyfood">
                  <button>169</button>
                  <button>ADD TO CART</button>
                </div>
              </div>
            </section>
            <hr /> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Viewdetails