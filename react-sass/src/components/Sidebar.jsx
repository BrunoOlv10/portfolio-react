import Avatar from '../img/bruno-oliveira.jpeg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import DownloadButton from './DownloadButton'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno Oliveira" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <DownloadButton />
    </aside>
  )
}

export default Sidebar
