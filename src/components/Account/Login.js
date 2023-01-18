import React,{Fragment,useEffect} from 'react'
import './Account.css'
function Login() {
    useEffect(()=>{
        let login_form = document.forms.loginform

        let handle = (event)=>{          
            event.preventDefault();
         let mobNum = document.querySelector("#mobile-number")   
         let password_err = document.querySelector("#password-err") 
         let mobile_number_err = document.querySelector("#mobile-number-err") 
         mobile_number_err.innerText=""
         password_err.innerText=""
         if (mobNum.value.length === 10 || mobNum.value.length === 13) { 
             const formData = new FormData(login_form);
             console.log(formData);
             // 2. JSON
             const jsonData = JSON.stringify(Object.fromEntries(formData));
             // Send to Backend
             console.log("JSON BODY :", jsonData)

            //  fetch("http://localhost:8000/api/auth/login",{
                fetch("https://airtrl-user-api.onrender.com/api/auth/login",{
                  method:"POST",
                  headers: { 'Content-Type':'application/json' },
                  body: jsonData
                })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data.token)
                  if(data.token === "No User Found,check your nummber" ){
                      let checknum = document.querySelector("#mobile-number") 
                    return(
                        checknum.classList.add("invalid_input"),
                        mobile_number_err.innerText="No User Found,check your number",
                        setTimeout(()=>{
                          checknum.classList.remove("invalid_input")
                        },300)
                      ) 
                  }
                  if(data.token === 'Invalid Password'){
                    let checkpass = document.querySelector("#password") 
                    return (
                      password_err.innerText="incorrect password",
                      checkpass.classList.add("invalid_input"),
                      setTimeout(()=>{
                        checkpass.classList.remove("invalid_input")
                      },300)
                      )
                  }
                const token = data.token
                  // second fetch with token
                  if (data.auth !== false) { 
                    console.log(token);
                    // fetch("http://localhost:8000/api/auth/userinfo",
                    fetch("https://airtrl-user-api.onrender.com/api/auth/userinfo",
                    {
                      method: "GET",
                      headers: {
                        'Content-Type': 'application/json',
                        "x-access-token": token
                      },
                    })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      localStorage.setItem('userInfo',JSON.stringify(data))
                    })
                    .then(
                      ()=>{
                    //   window.location= '/'
                    alert("login succesfuly");
                        let login = document.querySelector('.login')
                        login.classList.toggle("login_visible");
                      }
                     
                      )
                    }
                    else{
                      console.log("somethin went wrong");
                      alert("somethin went wrong, please try again later");
                    }
                })
            }
            else {
              alert("check the number")
            }
            }
            login_form.addEventListener('submit',handle)
            return ()=>{login_form.removeEventListener('submit',handle)}
        })
        return (
   <Fragment>
        <div className="login">
            <div className="login_main">
                <div className="login_body">
                <i class="fa-solid fa-arrow-left " id='l-fa-arrow-left'></i>
                <br />
                    <img src="/images/Logo-black.webp" alt="" />
                    <form name='loginform' className='login_form'>
                        <p id='mobile-number-err'></p>
                        <input type="tel" name='phone' placeholder='Enter your Number' id="mobile-number"/>
                        <p id="password-err"></p>
                        <input type="password" name='password' placeholder='enter your password' id="password"/>
                        <button>LOGIN</button>
                    </form>
                    <p >Create An Account ... <a  href="/signin" style={{'color':'red',fontWeight:"bolder"}}>Signin</a></p>
                </div>
            </div>
        </div>
   </Fragment>
  )
}

export default Login