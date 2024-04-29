import Avatar from '../img/bruno-oliveira.jpeg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno Oliveira" />
      <p className="title">Desenvolvedor</p>
      <p>Redes Sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar
