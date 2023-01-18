import React, { Fragment, useEffect } from 'react'

function Mainbody() {


  useEffect(() => {
    let place = document.getElementById('place');
    // fetch('http://localhost:9632/restloaction',{method:'GET'})
    fetch('https://zomato-backend-uv1y.onrender.com/restloaction', { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)

        data.map((data) => {
          let sec = document.createElement("option")
          sec.value = data.city_id
          sec.innerText = data.name
          return (
            place.appendChild(sec)
          )
        })
      })
    console.log("nothing");
  }, [])

  useEffect(() => {
    let restLocation = document.getElementById('rest_list');
    let place = document.getElementById('place');
    place.addEventListener('change', (event) => {
      let target = event.target.value
      if (target !== "no") {
        console.log(target);
        // fetch(`http://localhost:9632/rest/${target}`,{method:'GET'})
        fetch(`https://zomato-backend-uv1y.onrender.com/rest/${target}`, { method: 'GET' })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            if (data.length !== 0) {
              return (
                restLocation.innerHTML = " ",
                data.map((data) => {
                  let sec = document.createElement("option")
                  sec.value = data.restaurant_id
                  sec.innerText = data.restaurant_name
                  return (
                    restLocation.appendChild(sec)
                  )
                }))
            }
            else {
              let sec = document.createElement("option")
              sec.innerText = "no restaurants in your location"
            }
          })
      }
    })
  })
  useEffect(() => {
    function handlehotels(event) {
      let restid = event.target.value;
      if (restid === "no") return
      sessionStorage.setItem('restid', restid)
      window.location = '/restdetail'

    }
    let hotels = document.getElementById('hotels')
    hotels.addEventListener('change', handlehotels)
    return () => {
      hotels.removeEventListener('change', handlehotels)
    }
  })

  return (
    <Fragment>
      <div class="main-frame">
        <div class="container">
          <i> <img src="./images/logo.webp" alt="" /></i>
          <h1>Discover the best-food & drinks in Chennai</h1>
          <form action="" className='zomato_homepage_form'>
            <select name="location" id="place">
              <option value="no" >--select your location--</option>

            </select>
            <select name="rest" id="hotels" >
              <option value="no"  >-- select your restaurants --</option>
              {/* <!-- <option value="">no restaurants in your location</option> -->
          <!-- <option value=""></option> --> */}
              <optgroup id="rest_list" label="-------------------------">

              </optgroup>

            </select>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Mainbody