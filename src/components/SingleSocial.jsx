import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs';


const SingleSocial = () => {
  return (
    <div className='socials'>
      <div>
            <a href="https://twitter.com/Nabi_Thehill"
               target="_blank"
               rel='noreferrer'
               >
              <BsTwitter/>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/obinna-ugwu"
               target="_blank"
               rel='noreferrer'
            >
              <BsLinkedin/>
            </a>
        </div>
        <div>
            <a href='http://ugwuobinna.netlify.app'
               target="_blank"
               rel='noreferrer'
            >
              <BsGithub/>
            </a>
        </div>
      </div>
  )
}

export default SingleSocial