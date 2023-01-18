import React, { Fragment } from 'react'

function Quicksearch() {
  return (
    <Fragment>
      <div class="container">
        <div class="food-cat">

          <div class="order-online">
            <div class="card" >
              <img src="./images/order-online.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/mealtype">
                  <h3 class="card-title">Order Online</h3>
                  <p class="card-text">Stay home and order to your doorstep</p>
                </a>
              </div>
            </div>
          </div>
          <div class="dining">
            <div class="card" >
              <img src="./images/dining.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/">
                  <h3 class="card-title">Dining</h3>
                  <p class="card-text">View the city's favourite dining venues</p>
                </a>
              </div>
            </div>
          </div>
          <div class="night-life">
            <div class="card" >
              <img src="./images/night-life.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/">
                  <h3 class="card-title">Nightlife and Clubs</h3>
                  <p class="card-text">Explore the city's top nightlife outlets</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- food-collection --> */}

        <div class="food-collection-main">
          <div class="food-coll-tittle">
            <h3>Collections</h3>
            <div class="para">
              <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
              <a href="/">
                <p class="text-right">All collections in Chennai
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </p>
              </a>
            </div>
          </div>
          <div class="food-collection">
            <div class="trend-this-week coll">
              <div class="card bg-dark text-white">
                <img src="./images/coll-1.webp" class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <a href="/">
                    <h5 class="card-title">Trend This Week</h5>
                    <p class="card-text">
                      30 Places
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div class="best-of-chennai coll">
              <div class="card bg-dark text-white">
                <img src="./images/coll-2.webp" class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <a href="/">
                    <h5 class="card-title">Best of Chennai</h5>
                    <p class="card-text">
                      49 Places
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div class="best-bars coll">
              <div class="card bg-dark text-white">
                <img src="./images/coll-3.webp" class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <a href="/">
                    <h5 class="card-title">Best Bars & Clubs</h5>
                    <p class="card-text">
                      31 Places
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div class="brilliant-biryanis coll">
              <div class="card bg-dark text-white">
                <img src="./images/coll-4.webp" class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <a href="/">
                    <h5 class="card-title">Brilliant Biryanis</h5>
                    <p class="card-text">
                      24 Places
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Quicksearch