import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { Navbar, Footer, NavbarSticky } from './components';
import {
  Home,
  Article,
  } from './pages';

function App() {
  const [isScroll, setIsScroll] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 250) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    
    window.addEventListener('scroll', changeBackground);


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Archivo Narrow', 'Chivo']
      }
    });
   }, []);
  
  return (
    <Router>
      <GlobalStyle />
      <NavbarSticky isScroll={isScroll} />
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/article" exact component={Article} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
