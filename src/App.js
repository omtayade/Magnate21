import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () =>(
 <div>
   <h1>HATS PAGE</h1>
 </div>
);

function App() {
  return (
    <div className="App">
    
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop/hats' component={HatsPage} />


   
    
    </div>
  );
}

export default App;