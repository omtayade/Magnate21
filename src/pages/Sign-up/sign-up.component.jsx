import React from 'react'
import FormInput from '../../components/form-input/form-item.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth , createUserProfile} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
import {Link} from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
class SignUp extends React.Component{
    constructor(){
     super();

     this.state={
         displayName:'',
         email:'',
         password:'',
         confirmPassword:''
     }
    }


    sendEmailVerification =()=>{
        try{
        var user =  firebase.auth().currentUser;

        user.sendEmailVerification().then(function(){
        alert("Verify your email! Email verification link sent to your registered email-id");
       
        });
        }
        catch(error){
           alert();
        };
    }

    handleSubmit=async event =>{
        event.preventDefault();
        
       
        const {displayName , email , password , confirmPassword} = this.state;

        if(password != confirmPassword ) {
            alert("Passwords don't match , Re-enter password !")
            return;
        }

        try{
           const {user} = await auth.createUserWithEmailAndPassword(email ,password); 
             await createUserProfile(user , {displayName});
            
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            });
        }
        catch(error){
            console.log(error);
            alert(error.message)

        }
        this.sendEmailVerification();
    }

    handleChange= event =>{
        const{name , value} = event.target ; 

        this.setState({[name]:value});
    }

    render(){
        const {displayName , email , password , confirmPassword } = this.state;
        return(
            <div className="box">
                <div className='signup'>
                    <h2  className='title' style={{color:"black"}}>I don't have an account</h2>
                    <span style={{color:"black"}}>Sign up with your email amd password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit} >
                        <FormInput type="text" name="displayName" label="Username" value={displayName} handleChange={this.handleChange} required /> 
                        <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required /> 
                        <FormInput type="password" name="password" label="Password" value={password} handleChange={this.handleChange} required /> 
                        <FormInput type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} handleChange={this.handleChange} required /> 

                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </form>
                </div>
                <div className="switchPage">
                    <h3>Already have an account!</h3>
                    <Link to='/signin'>
                        <h4 >Login</h4>
                    </Link>
                    
                </div>
            </div>
            
        );
        }
}
export default SignUp
