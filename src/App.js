import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shop.component'
import CheckoutPage from './pages/Checkout/checkout.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/headers/headers.component'
import {auth , createUserProfile} from './firebase/firebase.utils'
import './App.css';
import {Route, Switch ,Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'


class App extends React.Component {
 


 unsubscribeFromAuth = null;

 componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
    if(userAuth){

     const userRef = await  createUserProfile(userAuth);

      userRef.onSnapshot(snapShot =>{
        setCurrentUser({
          
          id:snapShot.id,
          ...snapShot.data()
          
        });
      });

     
    }
    setCurrentUser(userAuth);
 
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  
 
  render (){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>
              this.props.currentUser ? (<Redirect to='/' />) :
              (<SignInAndSignUp/>) 
                
                } />
        </Switch>
      </div>
   );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //the rightmost setcurrentuser is the one which is imported from redux user actions.
});

export default connect(mapStateToProps , mapDispatchToProps) (App);