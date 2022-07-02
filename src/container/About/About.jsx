import React from 'react'
import './About.scss'
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import { images } from '../../constants';
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
//   {title: 'FrontEnd', description: 'I am a good Web Developer.', imgUrl:images.about01},
//   {title: 'Backend', description: 'I am a goog Web Developer.', imgUrl:images.about02},
//   {title: 'Fullstack', description: 'I am a Fullstack Developer.', imgUrl:images.about03}
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ]'
    getData(query)
  }, []);

  const getData = async(x)=>{
    const data = await client.fetch(x);

    console.log(data)
    setAbouts(data)
  }
  
  return (
    <>
    <h2 className='head-text'> I Know that <span>Good design</span> <br/> means <span>Good Business</span> </h2>

      <div className ="app__profiles">
      {abouts.map((about, index)=>{
        return(
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profiles-item"
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )
      })}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 'about'
  )