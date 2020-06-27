import React, { useEffect, useState, useReducer } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Product from './Components/Product';
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact';
import "react-toastify/dist/ReactToastify.min.css"

//firebase Configs

import {firebaseConfig} from "./utils/config"
import "firebase/database"
import firebase from "firebase/app"
import QueryPage from './pages/QueryPage';
import { ToastContainer } from 'react-toastify';
import reducer from './context/reducer';
import { SET_QUERY } from './context/action.types';
import {XitikContext} from './context/Context'
import Login from './pages/Login';
import Contactus from './pages/Contactus';
import Product1 from './pages/Product1';
import NewProductPage from './Components/NewProductPage';
import Product2 from './pages/product2';
import Product3 from './pages/product3';
import Product4 from './pages/product4';
import Product5 from './pages/product5';
import Product6 from './pages/product6';
import Product8 from './pages/product8';
import Product7 from './pages/product7';
import Product9 from './pages/product9';
import Product10 from './pages/product10';


//  DONE initialize FIREBASE
firebase.initializeApp(firebaseConfig)

const intialState = {
  messages: []
};

function App() {
    const [state,dispatch] = useReducer(reducer,intialState);
 
    const getAllQueries = async () => {
  const MessageRef = await firebase.database().ref("/messages")
  MessageRef.on('value',snapshot => { 
    dispatch({
      type: SET_QUERY,
      payload: snapshot.val()
    })
     
  })
  }

  useEffect(() => {
    getAllQueries()
  }, []);

  return (
    <>
    <Router>
      <XitikContext.Provider value={{state,dispatch}}>
      <ToastContainer/>
      <Navbar/>
      <BrowserRouter>
    <Switch>
      <Route exact path ="/" component= {Home} />
      <Route  exact path ="/product" component= {Product} />
      <Route exact path ="/query" component= {Contact} />
      <Route exact path ="/admin" component= {Login} />
      <Route exact path ="/queries" component={QueryPage} />
      <Route exact path ="/contactus" component={Contactus} />
      <Route exact path ="/product1" component= {Product1} />
      <Route exact path ="/product2" component= {Product2} />
      <Route exact path ="/product3" component= {Product3} />
      <Route exact path ="/product4" component= {Product4} />
      <Route exact path ="/product5" component= {Product5} />
      <Route exact path ="/product6" component= {Product6} />
      <Route exact path ="/product7" component= {Product7} />
      <Route exact path ="/product8" component= {Product8} />
      <Route exact path ="/product9" component= {Product9} />
      <Route exact path ="/product10" component= {Product10} />

      <Route exact path ="*" component= {PageNotFound} />
    </Switch>
    </BrowserRouter>
       <Footer/>
      </XitikContext.Provider>
     </Router>
     </>
  );
}

export default App;
