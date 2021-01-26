import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/headers/headers.component'
import {auth} from './firebase/firebase.utils'
import './App.css';
import {Route, Switch} from 'react-router-dom';



class App extends React.Component {
 
 constructor(){
   super();

   this.state={
     currentUser:null
   }
 }

 unsubscribeFromAuth = null;

 componentDidMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(user => {this.setState({currentUser:user});
   console.log(user);
  })}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  
 
  render (){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
   );
  }
}

export default App;