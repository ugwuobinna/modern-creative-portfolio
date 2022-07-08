import { motion } from 'framer-motion'
import {React, useState, useEffect} from 'react'
import { client } from '../../client'
import './Work.scss'
import { urlFor } from '../../client'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { AppWrap, MotionWrap } from '../../wrapper';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1})
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([])
  
  const getData = async(x) =>{
    const data = await client.fetch(x)
    setWorks(data);
    setFilterWork(data);
  }
  useEffect(() => {
    const query = '*[_type == "works"]'
    getData(query)
  }, [])
  
  
  const handleWorkFilter = (item)=>{
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity: 1}]);

      item ==='All' ? setFilterWork(works) : setFilterWork(works.filter((work)=> work.tags.includes(item)))
    }, 500);
  }
  return (
    <div className='app__works'>
      <h2 className='head-text'> My creative <span>Portfolio</span><br/></h2>
      <div className="app__work-filter">
        {['Python/Flask', 'React', 'Fullstack App', 'All'].map((item, index)=>(
          <div
            key={index}
            onClick={()=> handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active': ''}`}
            >{item}
          </div>
        ))}
      </div>

      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio">
      
      <Splide className="splide" options={{
            type: 'slide',
            arrows: true,
            pagination: false,
            drag: 'free',
            perPage:3,
            width: '80vw',
            autoplay: true,
            interval: 8000,
            rewind: true,
            speed: 7000,
            perMove: 1,
            rewindSpeed: 8000,
            pauseOnHover: true,
            padding: { left: 15},
            gap: '4rem',
            breakpoints: {
              1000:{
                perPage: 2,
                width: '70vw',
                gap: '8rem'
              },
              700:{
                destroy: true
              }
                
            },
            
            
        }}>

      {filterWork.map((work, index)=>(
        <SplideSlide key={index}>
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            <img src={urlFor(work.imgUrl)} alt={work.name}/>
            <motion.div
            whileHover={{opacity: [0,1]}}
            
            tranistion={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
            className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel='noreferrer'>
                <motion.div
                whileHover={{scale: [1,0.9]}}
                whileInView={{scale: [0, 1]}}
                tranistion={{duration: 0.25}}
                className="app__flex"
                >
                  <AiFillEye/>
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel='noreferrer'>
                <motion.div
                whileHover={{scale: [1,0.9]}}
                whileInView={{scale: [0, 1]}}
                tranistion={{duration: 0.25}}
                className="app__flex"
                >
                  <AiFillGithub/>
                </motion.div>
              </a>
              
            </motion.div>
            
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{work.title}</h4>
            <p className="p-text" style={{marginTop:10 }}>{work.description}</p>

            <div className="app__work-tag app__flex">
              <p className="p-text">{work.tags[0]}</p>
            </div>
          
          </div>
        </div>
        </SplideSlide>
        ))}
        </Splide>
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__work'), 'work',
  'app__primarybg' 
  )