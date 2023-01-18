import React,{Fragment} from "react";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Quicksearch from "./components/Quicksearch";
import Popularlocalities from "./components/Popularlocalities";
import Footer from "./components/Footer";
import './index.css'
// import Carticon from "./components/Carticon";
function Zomato() {
  return (
    <Fragment>
      <Header/>
      <Mainbody/>
      <Quicksearch/>
      <Popularlocalities/>
      <Footer/>
    </Fragment>
  );
}

export default Zomato;