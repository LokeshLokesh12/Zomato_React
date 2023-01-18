import React,{Fragment} from 'react';
// import {BrowsreRouter as Router, Routes, Route} from 'react-Router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Zomato from './Zomato';
import Viewdetails from './components/Viewdetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Orderonline from './components/Orderonline/Orderonline'
import Mealtype from './components/Orderonline/Mealtype';
import Carticon from './components/Carticon';
import Login from './components/Account/Login';
import Signin from './components/Account/Signin'
function App() {
  return(
   <Fragment>
   <Carticon/>
   <Login/>
   <Router>
      <Routes>
         <Route Exect path='/' element={<Zomato/>}></Route>
         <Route path='/restdetail' element={<Viewdetails/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/checkout' element={<Checkout/>}></Route>
         <Route path='/orderonline' element={<Orderonline/>}></Route>
         <Route path='/mealtype' element={<Mealtype/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
   </Router>
   </Fragment>
  )
}

export default App;
