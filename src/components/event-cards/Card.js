import React, { useState} from 'react'
import { AppModal } from '../modal/AppModal';
import './Card.css'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {auth} from '../../firebase/firebase.utils'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { Redirect } from 'react-router';



function Card({title , children, CurrentUser}) {


    const [open, setOpen] = useState(false);

    const [isRegister, setisRegister] = useState(false);

    const handleClick=()=>{
       

        if(CurrentUser){
            auth.currentUser.reload();    
            if(auth.currentUser.emailVerified && CurrentUser ) setisRegister(!isRegister);
            else if(auth.currentUser.emailVerified==false && CurrentUser) alert("Verify email first!");
        }
        else {
            alert("Login first");
           
        }

    }


    return (
        <div className="card">
            <div className="card__heading">
                {title}
            </div>
            <div className="card__content">
                <p>
                    {children}               
                </p>
            </div>

            <div className="card__footer">
                <div className="card__btn__holder">
                    <div className="card__btn" onClick={handleClick}>
                        {isRegister ? "Registered" : "Register"}
                    </div>
                </div>

                <div className="card__btn__holder">
                    <div className="card__btn" onClick={() => setOpen(true)}>
                        Details
                    </div>
                </div>
            </div>

            <div>
                <AppModal open={open} modalTitle={"Details"}  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aliquam asperiores eum a porro. Alias labore quis itaque assumenda ipsam eius? Ipsum hic sint quo ab molestiae blanditiis recusandae. Laborum.
                </AppModal>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
    CurrentUser:selectCurrentUser
});
export default connect(mapStateToProps) (Card);
