import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
function Checkout() {



  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }


  useEffect(() => {
    let address = document.forms.delivery;
    let form = document.getElementById('delivery')

    let confirmorder = async (event) => {
      event.preventDefault();
      const formData = new FormData(address);
      console.log(formData);
      // 2. JSON
      // const jsonData = JSON.stringify(Object.fromEntries(formData));
      var jsonData = JSON.parse(JSON.stringify(Object.fromEntries(formData)));

      console.log(jsonData);
      console.log(jsonData.name);

      if (jsonData.name === "" || jsonData.phone === "" || jsonData.address === "") {
        alert('some information is invalid')
        return
      }
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }

      
      let amount = sessionStorage.getItem('cost');

      const data = await axios.post(`https://razorpay-1gg2.onrender.com/payment/${amount}`)
      // const data = await axios.post(`http://localhost:9874/payment/${amount}`)      
      console.log(data)

      var options = {
        "key": "rzp_test_2EqXXeOXSUYTR4", // Enter the Key ID generated from the Dashboard
        "amount": data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.data.currency,
        "name": "ZOMATO",
        "description": ``,
        "image": "https://logosmarcas.net/wp-content/uploads/2020/11/Zomato-Emblema.png",
        "order_id": data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          console.log(response);
          try {
            const verifyUrl = "https://razorpay-1gg2.onrender.com/verify";
            // const verifyUrl = "http://localhost:9874/verify";
            fetch(
              `${verifyUrl}?razorpay_order_id=${response.razorpay_order_id}&razorpay_payment_id=${response.razorpay_payment_id}&razorpay_signature=${response.razorpay_signature}`
              , {
                method: 'POST'
              })
              .then((res) => res.json())
              .then((data) => {
                var time = new Date().toUTCString();
                console.log(time);

                let json = {
                  "razorpay_order_id": response.razorpay_order_id,
                  "razorpay_payment_id": response.razorpay_payment_id,
                  "razorpay_signature": response.razorpay_signature,
                  "name": jsonData.name,
                  "mobile": jsonData.phone,
                  "address": jsonData.address,
                  "meal_id": sessionStorage.getItem('buyit'),
                  "cost": sessionStorage.getItem('cost'),
                  "time": time
                }
                const jsonbody = JSON.stringify(json)
                console.log(jsonbody);

                console.log(JSON.parse(jsonbody));
                if (data.message === "Payment verified successfully") {
                  alert(data.message)
                  console.log(data);
                  // fetch("http://localhost:9874/paymentdb", {
                  fetch("https://razorpay-1gg2.onrender.com/paymentdb", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonbody
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data)
                      alert(data.message)
                      if (data.message === "ordered Successfully") {
                        window.location = "/"
                      }
                    })
                }
              })


          } catch (error) {
            console.log(error);
          }

        },
        "prefill": {
          "name": jsonData.name,
          "contact": jsonData.phone
        },
        "notes": {
          "Receipt": data.data.receipt,
          "order": sessionStorage.getItem('buyit'),
          "Address": jsonData.address,
          "name": jsonData.name,
          "contact": jsonData.phone
        },
        "theme": {
          "color": "#dadada"
        }
      };

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()

      paymentObject.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

    }
    form.addEventListener('submit', confirmorder)
    return () => { form.removeEventListener('submit', confirmorder) }
  })
  return (
    <Fragment>
      <Header />
      <div className="bg_gray">
        <div className="container">
          <div className="yourdetails">
            <h1>yourdetails</h1>
            <div className="container bg_fff ">
              <form name='delivery' className='delivery' id='delivery' >
                <div className=" delivery_name">
                  <input type="text" name='name' id='name' placeholder='enter your name' />
                  <input type="tel" name='phone' id='phone' placeholder='enter your number' />
                </div>
                <input className='address' type="text" name='address' placeholder='enter your address' />
                <button>confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Checkout