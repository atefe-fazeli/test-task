// importing 
import React, { Component, useState } from 'react';
import pic from '../images/pic.jpg';
import Banner from './Banner';
import SideComponent from './SideComponent';

// importing react-icons
import { BiStopwatch } from 'react-icons/bi';
import { BiBadgeCheck } from 'react-icons/bi';
import { AiOutlineStop } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { CgDanger } from 'react-icons/cg';
import { VscTools } from 'react-icons/vsc';
import { FiMenu } from 'react-icons/fi';
import { MdNavigateNext } from 'react-icons/md';
const Home = () => {

    const [data,setData]=useState({
        Factoryname:'Factory name',
        Taskname:'Task name',
        CurrentTask:54,
        TotalTask:220,
        Time:'1 h 3 min left',
        Score:77,
    })
  
//   side Component
    const [sideComp,setSideComp]=useState(false)
    
    return (
        <div>
        <div className='HomeMaincontainer'>
           <div className='NavMaincontainer' >
               
                <ul className='NavUl' >
                     <li><img  src={pic} alt='pic'></img><span>{data.Factoryname}</span> <MdNavigateNext className='NavIcons'/></li>
                     <li><img  src={pic} alt='pic'></img><span>{data.Taskname}</span> <MdNavigateNext className='NavIcons'/></li>
                     <li><span>{`${data.CurrentTask}/${data.TotalTask}`}</span></li>
               </ul>
               <ul className='NavUl'>
                     <li><BiStopwatch className='NavIcons'/><span>{data.Time}</span></li>
                     <li><BiBadgeCheck className='NavIcons'/><span>{data.Score}</span></li>
               </ul>
               <ul className='NavUl'>
                     <li><GoSettings className='NavIcons'/></li>
                     <li><CgDanger className='NavIcons'/></li>
                     <li><AiOutlineStop className='NavIcons'/></li>
               </ul>
               <ul className='NavUl'>
                     <li><VscTools className='NavIcons'/></li>
                     <li><FiMenu className='NavIcons' onClick={()=>setSideComp(!sideComp)}/></li>
               </ul>
               </div>
               <div className='NavBtn'>
                   <button>SUBMIT & NEXT<span><MdNavigateNext/></span></button>
               </div>
        </div>
        <Banner/>
        {sideComp && <SideComponent/>}
        </div>
    );
};

export default Home;