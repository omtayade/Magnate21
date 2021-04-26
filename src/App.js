import React from 'react';
// import Header from './components/headers/headers.component'
import {auth , createUserProfile} from './firebase/firebase.utils'
import './App.css';
import {Route, Switch ,Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import AboutUs from './pages/About us/about-us.component'

import Body from './pages/events/Body'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import SignIn from './pages/sign-in/sign-in.component'
import SignUp from './pages/Sign-up/sign-up.component';
import ForgotPassword from './components/forgot-password/forgot-password.component'
import Navbar from './components/Navbar/Navbar'


class App extends React.Component {


 unsubscribeFromAuth = null;

  // componentDidUpdate(){
  //   var userAuth =firebase.auth().currentUser;
  //   const emailverified =userAuth.emailVerified;
  //   console.log(emailverified) 
  //   if(emailverified) alert("Email verified")
  // }

 componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
    if(userAuth){

     const userRef = await  createUserProfile(userAuth);  //App.js me createuserProfile user ko database me dalne ka kaam nahi kar raha hai vo to signup compo me hi ho jaata hai  ,yaha pe ye bas database me already stored user ka userRef bhej raha hai taki ham apne state me daal sake,  
    const emailverified =userAuth.emailVerified; 
    console.log(emailverified)
    
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

       

        <Navbar />

        <Switch>
          
          <Route exact path='/signin/forgot-password' component={ForgotPassword} />
         <Route exact path='/about-us' component={AboutUs} />
         <Route exact path='/events' component={Body} />
         <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' render={()=>
              this.props.currentUser ? (<Redirect to='/' />) :
              (<SignUp/>) 
                
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