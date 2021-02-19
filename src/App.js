import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/headers/headers.component'
import {auth , createUserProfile} from './firebase/firebase.utils'
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
  this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
    if(userAuth){

     const userRef = await  createUserProfile(userAuth);

      userRef.onSnapshot(snapShot =>{
        this.setState({
          currentUser:{
          id:snapShot.id,
          ...snapShot.data()
          }
        } , ()=>{
          console.log(this.state)
        });
      });

     
    }
    this.setState({currentUser:userAuth});
 
  });
}
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