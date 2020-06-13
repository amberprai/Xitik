import React, { useEffect, useState, useReducer } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import { Container } from 'reactstrap';
import Login from './pages/Login';

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
    <Switch>
      <Route exact path ="/" component= {Home} />
      <Route exact path ="/product" component= {Product} />
      <Route exact path ="/contact" component= {Contact} />
      <Route exact path ="/admin" component= {Login} />
      <Route exact path ="/queries" component={QueryPage} />
      <Route exact path ="*" component= {PageNotFound} />
    </Switch>
       <Footer/>
      </XitikContext.Provider>
     </Router>
     </>
  );
}

export default App;
