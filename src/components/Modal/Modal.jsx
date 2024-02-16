import React from "react";
import {Modal} from "react-bootstrap";


function CustomModal(props){
    const { children, handleClose, show,title } = props
  return (
    <div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
                <Modal.Title> {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
                
            </Modal.Body>
        </Modal>
    </div>
  )
};

export default CustomModal;
