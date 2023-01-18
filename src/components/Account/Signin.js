import React,{Fragment,useEffect} from 'react'

function Signin() {
    useEffect(()=>{
        let signinform = document.forms.signinform;
        let signin = document.querySelector('#signinform')
        let password = document.querySelector('#password')
        let confirmpassword = document.querySelector('#confirm_password')
        
        let handleSignin = (event)=>{
          event.preventDefault();
          console.log(password.value , confirmpassword.value  );    
          
          if(password.value === confirmpassword.value){
    
            const formData = new FormData(signinform);
            // 2. JSON
              console.log(formData);
            const jsonData = JSON.stringify(Object.fromEntries(formData));
              // Send to Backend
              console.log("JSON BODY :", jsonData)
    
              // fetch("http://localhost:8000/api/auth/register",{
                fetch("https://airtrl-user-api.onrender.com/api/auth/register",{
                  method:"POST",
                  headers: { 'Content-Type':'application/json' },
                  body: jsonData
                })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  console.log(data.message === 'Email already used');
                  console.log(data.message === 'Registion Successful');
                  if(data.message === 'Registion Successful'){
                      window.location = '/'
                    }
                    else{
                      alert(data.message)
                  }
                })
      
            console.log("fine");
          }
          else{
            alert('password does not match')
          }
        }
        // console.log(signin);
        signin.addEventListener('submit',handleSignin)
        return()=>{signin.removeEventListener('submit',handleSignin)}
      })
  return (
  <Fragment>
        <div className="login login_visible">
            <div className="login_main">
                <div className="login_body">
                <a href="/"><i class="fa-solid fa-arrow-left " id='l-fa-arrow-left'></i></a>
                <br />
                    <img src="/images/Logo-black.webp" alt="" />
                    <form name='siginform' className='login_form' id='signinform'>

                        <input type="text" name='name' placeholder='Enter your Name'/>
                        <input type="text" name='phone' placeholder='Enter your Phone Number'/>
                        <input type="text" name='email' placeholder='Enter your Email'/>
                        <input type="password" name='password' placeholder='enter your password' id='password' />
                        <input type="password" name='conform_password' placeholder='enter your password' id='confirm_password'/>
                        <button>SIGNIN</button>
                    </form>
                    {/* <p >Already Have An Account... <a  href="/login" style={{'color':'red',fontWeight:"bolder"}}>Login</a></p> */}
                </div>
            </div>
        </div>
   </Fragment>
  )
}

export default Signin