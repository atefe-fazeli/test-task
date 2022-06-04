import React from 'react';
import { useState } from 'react';
import Modal from '../components/Modal.js';

// importing react icons
import { HiOutlineTrash } from 'react-icons/hi';
import { BsCalendar2 } from 'react-icons/bs';




const SideComponent = () => {
  const [openModal,setOpenModal]=useState(false);

    return (
        <div className='MainSideContainer'>
            <div  className='SideContainerSecOne'>
                <h1>No Region selected</h1>
            </div>
            <div  className='SideContainerSectwo'>
                <div>
                    <div>
                      <button>Regions 1</button>
                      <button>labels</button>
                    </div>
                    <HiOutlineTrash onClick={()=>setOpenModal(true)} />
                    {console.log(openModal)}
                </div>
                <div>
                    <h1><span><BsCalendar2 /></span>Sorted by Date</h1>
                </div>
            </div>
            <div  className='SideContainerSecthree'>
                <div>
                    <ul>
                        <li>1</li>
                        <li>Hello</li>
                        <li>icon</li>
                        <li>icon</li>
                    </ul>
                </div>
            </div>
            <div  className='SideContainerSecFour'>
                <h1>Relations (0)</h1>
                <h1>No Relations added yet</h1>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
       </div>    );
};

export default SideComponent;         