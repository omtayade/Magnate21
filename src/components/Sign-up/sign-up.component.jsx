import React from 'react'
import FormInput from '../form-input/form-item.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth , createUserProfile} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
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

    handleSubmit=async event =>{
        event.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;

        if(password != confirmPassword ) {
            alert("Passwords don't match , Re-enter password !")
            return;
        }

        try{
           const {user} = await auth.createUserWithEmailAndPassword(email ,password); //authentication area me ban gaya user with emaila nd password.
             await createUserProfile(user , {displayName}); //authentication area se user ko liya and database me dala with email pass and displayName with the help of createUserProfile util function.
            
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            });
        }
        catch(error){
            alert(error.message);

        }
    }

    handleChange= event =>{
        const{name , value} = event.target ; 

        this.setState({[name]:value});
    }

    render(){
        const {displayName , email , password , confirmPassword } = this.state;
        return(
            <div className='signup'>
                <h2  className='title'>I don't have an account</h2>
                <span>Sign up with your email amd password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput type="text" name="displayName" label="Username" value={displayName} handleChange={this.handleChange} required /> 
                    <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required /> 
                    <FormInput type="password" name="password" label="Password" value={password} handleChange={this.handleChange} required /> 
                    <FormInput type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} handleChange={this.handleChange} required /> 

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>


            </div>
        );
        }
}
export default SignUp
