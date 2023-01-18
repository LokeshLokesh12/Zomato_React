import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'

function Mealtype() {
    const [mealtype, setmealtype] = useState([{
        "id": "",
        "mealtype_id": "",
        "mealtype": "",
        "content": "",
        "meal_image": ""
    }])
    useEffect(() => {
        sessionStorage.removeItem('mealtype_id')
        // let url = `http://localhost:9632/mealtype`
        let url = `https://zomato-backend-uv1y.onrender.com/mealtype`
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setmealtype(data)
            }
            )
    }, [])

    useEffect(() => {
        let mealtype = document.getElementById('mealtype')
        let mealtypeHandle = (event) => {
            let sec = event.target.closest('SECTION').id;
            if (sec.id !== "mealtype") {
                console.log(sec);
                sessionStorage.setItem('mealtype_id', sec)
                window.location = '/orderonline'

            }
        }
        mealtype.addEventListener('click', mealtypeHandle)

        return () => {
            mealtype.removeEventListener('click', mealtypeHandle)

        }
    })
    return (
        <Fragment>
            <Header />
            <div className="mealtype-bc">
                <div className="container mealtype" id='mealtype'>
                    {/* <section>
                    <div className="fod">
                        <h1>Night Life</h1>
                    </div>
                    <img src="https://b.zmtcdn.com/data/pictures/chains/6/120976/517f929243a8a987437661453a5b45e0_featured_v2.jpg" alt="" />
                </section> */}
                    {
                        mealtype.map((data) => {
                            return (
                                <section id={data.mealtype_id} key={data.mealtype_id}>
                                    <div className="fod">
                                        <h1>{data.mealtype}</h1>
                                    </div>
                                    <img src={data.meal_image} alt="" />
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Mealtype