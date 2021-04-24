import React, {Children, useState} from 'react'
import 'react-responsive-modal/styles.css';
import '../Styles/Card.css'
import { Modal } from 'react-responsive-modal';

function Card({title , children}) {


    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



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
                    <div className="card__btn">
                        Register
                    </div>
                </div>

                <div className="card__btn__holder">
                    <div className="card__btn" onClick={onOpenModal}>
                        Details
                    </div>
                </div>
            </div>

            <div>
                <Modal open={open} onClose={onCloseModal} classNames={{
                                                                        overlay: "customOverlay",
                                                                        modal: "customModal",
                                                                        }} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>
        </div>
    )
}

export default Card
