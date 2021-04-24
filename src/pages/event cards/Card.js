import React, { useState} from 'react'
import 'react-responsive-modal/styles.css';
import './Card.css'
import { Modal } from 'react-responsive-modal';

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
                <Modal open={open} onClose={() => setOpen(false)} classNames={{
                                                                        overlay: "customOverlay",
                                                                        modal: "customModal",
                                                                        }} center>
                    <h2>Details</h2>
                    <p>
                        {modalData}
                    </p>
                </Modal>
            </div>
        </div>
    )
}

export default Card
