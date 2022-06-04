import React from 'react';
import './Modal.css';

const Modal = ({closeModal}) => {
    return (
        <div  className='modalbackground'>
            <div className='modalcontainer'>
                <div className='modaltitle'>
                    <h1>Removing all Regions</h1>
                </div>
                <div className='modalbody'>
                    <p>Do you want to delete all annotated regions?</p>
                </div>
                <div className='modalfooter'>
                    <button onClick={()=>closeModal(false)}>cancel</button>
                    <button>Ok</button>
                </div>
            </div> 
        </div>
    );
};

export default Modal;