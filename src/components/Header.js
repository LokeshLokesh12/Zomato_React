import React, { Fragment,useEffect } from 'react'

function Header() {

  function loginLink(){
    const profilestr = localStorage.getItem("userInfo")
    const profile = JSON.parse(profilestr)
    if(!localStorage.getItem("userInfo")){
        return(
            
            <li class="nav-item " id='login_buttton'>
              <a class="nav-link" href="/">Log in</a>
            </li>
        )
    }else{
        return(
         

          <li class="nav-item " id='login_buttton'>
            <a class="nav-link" href="/">{profile.name}</a>
          </li>
        )
    }
}

  useEffect(()=>{
    let login_buttton = document.getElementById('login_buttton')
    let login = document.querySelector('.login')
    let handlelogin = (event)=>{
      event.preventDefault();
      console.log(login);
      login.classList.toggle("login_visible");
    }  
    login_buttton.addEventListener('click',handlelogin)
    return ()=>{ login_buttton.addEventListener('click',handlelogin) }
  })
  useEffect(()=>{
    let buttton = document.getElementById('l-fa-arrow-left')
    let login = document.querySelector('.login')
    let handlelogin = (event)=>{
      event.preventDefault();
      login.classList.toggle("login_visible");
    }  
   buttton.addEventListener('click',handlelogin)
    return ()=>{ buttton.addEventListener('click',handlelogin) }
  })

  return (
    <Fragment>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div className="container">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-light"></span>
              </button>
              <a class="navbar-brand" href="/">
                <img src="./images/Logo-black.webp" alt="" />
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ padding: "0 0 0 0" }}>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Investor Relations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Add restaurant</a>
                </li>
                {/* <li class="nav-item " id='login_buttton'>
                  <a class="nav-link" href="/">Log in</a>
                </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link" href="/">Sign up</a>
                </li>*/}
                <li class="nav-item">
                  <a class="nav-link" href="/cart">Cart</a>
                </li>
                {loginLink()}
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </Fragment>
  )
}

export default Header