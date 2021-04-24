import React , {useState} from 'react';
import FormInput from '../form-input/form-item.component'
import CustomButton from '../custom-button/custom-button.component'
import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';


class ForgotPassword extends React.Component{
 constructor(){
     super();

     this.state ={
         email:''
     }
 }
 resetPassword = () =>{
    var auth = firebase.auth();
   
    auth.sendPasswordResetEmail(this.state.email).then(function() {
    
    }).catch(function(error) {
    alert(error.message)
    });
}

handleChange = event =>{
    
    const{name , value} = event.target ; 

    this.setState({[name]:value});
   
}


render(){
    return(
    <div>
            <h2>Enter your email id</h2>
            <FormInput type="email" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required /> 
            <CustomButton onClick={this.resetPassword} isGoogleSignIn>{''}Reset Password{''}</CustomButton>

    </div>
    );
}

}
export default ForgotPassword; 