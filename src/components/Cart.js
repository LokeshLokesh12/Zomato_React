import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
function Cart() {

  const [cartmeal, setcartmeal] = useState([{
    "_id": "",
    "menu_id": "",
    "menu_name": "",
    "description": "",
    "restaurant_id": "",
    "menu_image": "",
    "menu_type": "",
    "menu_price": ""
  }])
  const [total, settotal] = useState("")


  useEffect(() => {

    var ordermenuItem = JSON.parse(sessionStorage.getItem('cart'));
    console.log(ordermenuItem);
    // console.log(ordermenuItem.cartmenu);
    // let url = `http://localhost:9632/menuItem`
    let url = `https://zomato-backend-uv1y.onrender.com/menuItem`

    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ordermenuItem)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcartmeal(data)

        //  console.log(typeof(data));
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return 'ok'
        })
        console.log(totalPrice);
        settotal(totalPrice.toFixed(2))
      })
  }, [])

  useEffect(() => {
    let checkout = document.getElementById('checkout')
    var ordermenuItem = JSON.parse(sessionStorage.getItem('cart'));
    console.log(ordermenuItem);
    let handleCheckOut = (event) => {
      console.log("clicked");
      sessionStorage.setItem('cost', total)
      sessionStorage.setItem('buyit', JSON.stringify(ordermenuItem.cartmenu))
      window.location = '/checkout'
    }
    checkout.addEventListener('click', handleCheckOut)
    return () => { checkout.removeEventListener('click', handleCheckOut) }
  })

  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1 className='text-right'>your cart</h1>
        <hr />
        <div className="orders meal ">
          {/* <section>
              <img src="https://b.zmtcdn.com/data/dish_photos/34d/7ab40b39dd655da9c68e52ed5388a34d.jpg" alt="" />
              <div className="foodinfo">
                <h1>Large Classic Cheesy Pizza With Tandoori Paneer</h1>
                <p>All time Favorite Large Pizza with assorted Toppings and Paneer Cubes</p>
                <h5>vegetarian</h5>
                <div className="buyfood">
                  <button disabled>₹ 169</button>    
                </div>
              </div>
            </section>  */}
          {
            cartmeal.map((data) => {
              return (
                <div className="" key={data.menu_id}>
                  <section >
                    <img src={data.menu_image} alt="" />
                    <div className="foodinfo">
                      <h1>{data.menu_name}</h1>
                      <p>{data.description}</p>
                      <h5>{data.menu_type}</h5>
                      <div className="buyfood">
                        <button disabled>₹ {data.menu_price}</button>
                      </div>
                    </div>
                  </section>
                  <hr />
                </div>
              )
            })
          }
          {/* <hr /> */}
          <div className="buyfood checkout">
            <h1>₹ {total}</h1>
            <button id='checkout' >checkout</button>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Cart