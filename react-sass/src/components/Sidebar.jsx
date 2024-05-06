import Avatar from '../img/bruno-oliveira.jpg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import DownloadButton from './DownloadButton'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className='img-degrade'>
        <img src={Avatar} alt="Bruno Oliveira" />
      </div>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <DownloadButton />
    </aside>
  )
}

export default Sidebar
