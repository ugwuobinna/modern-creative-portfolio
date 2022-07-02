import {React, useState} from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import {images} from '../../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app_navbar-logo'>
            <img src={images.obinna3} alt="Logo"/>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item)=>{
                return (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div/>
                    <a href={`#${item}`}>{item}</a>
                </li>
                )
            })}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle && (
                <motion.div
                    whileInView={{x: [300, 0] }}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                >
                    <HiX onClick={()=>setToggle(false)}/>
                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map((item)=>{
                            return (
                            <li key={item}>
                                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
                            </li>
                            )
                        })}
                    </ul>
                    
               </motion.div>
                
            )}
           
            
            
        </div>
    </nav>
  )
}

export default Navbar