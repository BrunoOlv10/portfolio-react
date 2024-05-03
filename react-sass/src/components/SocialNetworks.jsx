import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/Socialnetworks.sass'

const socialNetworks = [
  {name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/bruno-olv/'},
  {name: 'github', icon: <FaGithub />, link: 'https://github.com/BrunoOlv10'},
]

const SocialNetwork = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetwork
