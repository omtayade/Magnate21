import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from "../../components/Sign-up/sign-up.component";
// import {connect} from 'react-redux'
const SignInAndSignUp = ({currentUser}) =>(
    <div className="sign-in-and-sign-up">
        {/* {currentUser ?
            (<div>
                <SignUp/>
            </div>) :
            (<div>
                <SignIn/>
                <SignUp/>
            </div>)
        } */}
        <SignIn/>
        <SignUp/>
        
        </div>

);

// const mapStateToProps = state =>({
//     currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
//   });


// export default connect(mapStateToProps) (SignInAndSignUp)
export default SignInAndSignUp