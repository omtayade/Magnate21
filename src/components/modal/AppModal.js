import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import './AppModal.css'
import { Modal } from 'react-responsive-modal';

export const AppModal = ({open, modalTitle, children}) => {


    const [Open, setOpen] = useState(true)

    return (
        <div>
                <Modal open={Open && open} onClose={()=>setOpen(false)} classNames={{
                                                                        overlay: "customOverlay",
                                                                        modal: "customModal",
                                                                        }} center>
                    <h2>{modalTitle}</h2>
                    <p>
                        {children}
                    </p>
                </Modal>
            </div>
    )
}
