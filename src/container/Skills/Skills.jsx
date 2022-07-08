import React from 'react'
import './Skills.scss';
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'
import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import ReactTooltip from 'react-tooltip';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';
    
    client.fetch(query)
      .then((data)=> setSkills(data))
    
    client.fetch(experienceQuery)
      .then((data)=> setExperience(data))
    
  }, []);

  return (
    <div className="app__skills">
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

        <motion.div className='app__skills-exp'>
          {experience.map((experience)=>(
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work)=>(
                  <>
                  <motion.div
                     whileInView={{opacity: [0,1]}}
                     transition={{duration: 0.5}}
                     className="app__skills-exp-work"
                     data-tip
                     data-for={work.name}
                     key={work.name}
                  >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                  </motion.div>
                  <ReactTooltip 
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                    
                  >
                      {work.desc}
                  </ReactTooltip>
                </>
                ))}

              </motion.div>
            </motion.div>
            
             
            
          ))}

        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 'skills'
  )