import { motion } from 'framer-motion'
import {React, useState, useEffect} from 'react'
import { client } from '../../client'
import './Work.scss'
import { urlFor } from '../../client'

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

  }
  return (
    <div>
      <h2 className='head-text'> My creative <span>Portfolio</span> <br/></h2>
      <div className="app__work-filter">
        {['Python', 'Flask', 'React JS', 'Sass', ' PostgreSQL'].map((item, index)=>(
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
      
      {filterWork.map((work, index)=>(
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            <img src={urlFor(work.imgUrl)} alt={work.name}/>
          
          </div>
        </div>
      ))}

      </motion.div>
    </div>
  )
}

export default Work