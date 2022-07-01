import React from 'react'
import './Skills.scss';
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'
import { client, urlFor } from '../../client'
import { AppWrap } from '../../wrapper'


const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  
  const getData = async(x) =>{
    const data = await client.fetch(x)
    console.log(data)
    setSkills(data)
  }

  useEffect(() => {
    const query = '*[_type == "skills"]'
    const experienceQuery = '*[_type == "experiences"]'
    getData(experienceQuery);
    getData(query);
    
    
    
  }, []);

  return (
    <div>
      <h2 className="head-text">Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill)=>{
            return(
              <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5}}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className='app__flex' style={{backgroundColor:skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name}/>
                </div>
                <p className='p-text'>{skill.name}</p>


              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills