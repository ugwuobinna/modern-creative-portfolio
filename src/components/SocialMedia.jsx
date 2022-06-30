import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
    </div>
  )
}

export default SocialMedia