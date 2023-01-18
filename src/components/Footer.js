import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
      <div class="footer">
        <div class="container">
          <div class="upper-section">
            <img src="./images/Logo-black.webp" alt="" />
          </div>
          <div class="lower-section">
            <div class="left">
              <ul>
                <h5>About zomato</h5>
                <li><a href="/">Who we are</a></li>
                <li><a href="/">blog</a></li>
                <li><a href="/">work with us</a></li>
                <li><a href="/">investor relation</a></li>
                <li><a href="/">report fraud</a></li>
                <li><a href="/">contact us</a></li>
              </ul>

              <ul>
                <h5>ZOMAVERSE</h5>
                <li><a href="/">Zomato</a></li>
                <li><a href="/">feeding india</a></li>
                <li><a href="/">hyperpure</a></li>
                <li><a href="/">zomaland</a></li>
              </ul>

              <ul>
                <h5>FOR RESTAURANTS</h5>
                <li><a href="/">Partner with us</a></li>
                <li><a href="/">Apps for you</a></li>
                <h5 class="work">FOR ENTERPRISES</h5>
                <li><a href="/">zomato for work</a></li>
              </ul>

              <ul>
                <h5>LEARN MORE</h5>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">security</a></li>
                <li><a href="/">terms</a></li>
                <li><a href="/">sitemap</a></li>

              </ul>
            </div>
            <div class="right">
              <div class="social">
                <h5>social links</h5>
                <div class="zomato_icons">
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div class="app">
                  <img src="./images/play-store.png" alt="" />
                  <img src="./images/app-store.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer