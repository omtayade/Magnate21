import React from 'react'
import './custom-button.styles.css'

const CustomButton =({children,isGoogleSignIn,inverted, ...otherProps})=>(
    <button className={`${inverted ?'inverted':''}  ${isGoogleSignIn ?'google-sign-in':''} custom-button`} {...otherProps}><div className='child'>{children}</div></button>
)
export default CustomButton