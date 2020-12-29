import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component'
import Header from './components/headers/headers.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
      


   
    
    </div>
  );
}

export default App;