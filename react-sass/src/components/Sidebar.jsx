import Avatar from '../img/bruno-oliveira.jpeg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno Oliveira" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar
