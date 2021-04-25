import React, { useState} from 'react'
import { AppModal } from '../modal/AppModal';
import './Card.css'


function Card({title , children, modalData}) {


    const [open, setOpen] = useState(false);

    const [isRegister, setisRegister] = useState(false)



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
                    <div className="card__btn" onClick={()=>setisRegister(!isRegister)}>
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

export default Card
