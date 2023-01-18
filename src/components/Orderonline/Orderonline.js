import React,{Fragment,useEffect,useState} from 'react'
import Header from '../Header'
import './Orderonline.css'


function Orderonline() {

    
    // const [filtererr,setfiltererr] = useState(false)
    const [restinfo,setrestinfo] = useState(
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

      useEffect(()=>{ 
        let mealtype_id = sessionStorage.getItem('mealtype_id')  
        console.log(mealtype_id);    
        // let url = `http://localhost:9632/filter/?mealId=${mealtype_id}`
        let url = `https://zomato-backend-uv1y.onrender.com/filter/?mealId=${mealtype_id}`
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setrestinfo(data)
          }
            )
      },[])


    useEffect(()=>{
        let form = document.getElementById('searchfilter')
        let handle = (event)=>{
            event.preventDefault();
            let formel = document.forms.filter
            const formData = new FormData(formel);
            console.log(formData);
            // 2. JSON
            // const jsonData = JSON.stringify(Object.fromEntries(formData));
            const jsonData =  JSON.parse(JSON.stringify(Object.fromEntries(formData)));
            console.log(jsonData);
            let cuisine = jsonData.cuisine;
            let costt = jsonData.cost;
            let cost;
            if (costt !== undefined){
                cost = costt.split("-")
                // console.log(costt );
            } 
            console.log(cuisine, costt,cost);
            let mealid = sessionStorage.getItem('mealtype_id')
            let url
            if (cost){
                //  url = `http://localhost:9632/filter?lcost=${cost[0]}&hcost=${cost[1]}&cuisineId=${cuisine}&mealId=${mealid}`
                url = `https://zomato-backend-uv1y.onrender.com/filter?lcost=${cost[0]}&hcost=${cost[1]}&cuisineId=${cuisine}&mealId=${mealid}`
                }
            else(
                // url = `http://localhost:9632/filter?cuisineId=${cuisine}&mealId=${mealid}`
                url = `https://zomato-backend-uv1y.onrender.com/filter?cuisineId=${cuisine}&mealId=${mealid}`

            )
            console.log(url);
            fetch(url,{                   
                method:'GET'
                                 
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data)
              costt= undefined
              cuisine= undefined
              cost= undefined
            // var restaurant_id = [];
            // data.map((data)=>{
            //     return(
            //         restaurant_id.push(data.restaurant_id)
            //         )                   
            //     })          
            //     console.log(restaurant_id);
            // console.log(data.mealTypes.mealtype_id);
                // if(data.length <= 0){
                //     setfiltererr(true)
                // }
                setrestinfo([
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
                    ])
                setrestinfo(data)
                // console.log(restinfo);
                })                  
        }
        form.addEventListener('submit',handle)
        return()=>{
        form.removeEventListener('submit',handle)
        }
        
    })

    useEffect(()=>{
        let restid = document.getElementById('restlist')
        let handle = (event)=>{
            // console.log();
            if(event.target.id === "cart"){
                console.log(event.target.className);
                sessionStorage.setItem('restid',event.target.className)
                window.location = '/restdetail'
            }
        }
        restid.addEventListener('click',handle)
        return()=>{ 
            restid.removeEventListener('click',handle)
        }
    })
   
  return (
    <Fragment>
        <Header/>
        <div className="container orderonline">
            <div className="filter" >
                <h3>Filter Your Restaurant</h3>
                <hr />
                <form name='filter' id='searchfilter' >
           
                <h5>cuisine</h5>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/> North Indain
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2"/> Sorth Indain
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3"/> Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4"/> Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5"/> Street Food
                    </label>
                    <h5>cost</h5>
                    <label className="radio">
                        <input type="radio" name="cost" value=""/> All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="1-299"/> 1-299
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="300-599"/> 300-599
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="600-9000"/> 600-999
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="1000-4999"/> 1000-4999
                    </label>

                    <div className="buyfood search-btn"><button id='cart'>SEARCH</button></div>
    
                </form>
            </div>
            <div className="listitem" id='restlist'>
                {/* <section>
                <div className="food">
                    <h5>Large Classic Cheesy Pizza With Tandoori Paneer</h5>
                    <p>vegetarian</p>
                    <div className="buyfood"><button id='cart'>ADD TO CART</button></div>
                </div>
                <img className='rest_image' src="https://b.zmtcdn.com/data/pictures/chains/6/120976/517f929243a8a987437661453a5b45e0_featured_v2.jpg" alt="rest_images" /> 
                </section> */}
                {
                    
                    restinfo.length > 0?
                    restinfo.map((data)=>{
                        return(
                        <section id={ data.restaurant_id} key={data.restaurant_id}>
                            <div className="food">
                                <h5>{data.restaurant_name}</h5>
                                <p>{data.rating_text}</p>
                                <h5>₹{data.cost}</h5>
                                <div className="buyfood"><button id='cart' className={data.restaurant_id}>view foods</button></div>
                            </div>
                            <img className='rest_image' src={data.restaurant_thumb} alt="rest_images" /> 
                        </section>
                        )
                    }) : <h1>sorry, no restaurant found</h1>
                }
            </div>
        </div>
    </Fragment>
  )
}

export default Orderonline