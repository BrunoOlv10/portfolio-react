import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass,
  DiWordpress,
  DiGit,
  DiLinux,
  DiPhotoshop
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 />, exp: 'Avançado' },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> , exp: 'Avançado' },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> , exp: 'Intermediário' },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql />, exp: 'Intermediário' },
  { id: 'react', name: 'React', icon: <DiReact />, exp: 'Básico' },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, exp: 'Básico' },
  { id: 'sass', name: 'SASS', icon: <DiSass />, exp: 'Básico' },
  { id: 'wordpress', name: 'WordPress', icon: <DiWordpress />, exp: 'Básico' },
  { id: 'git', name: 'GIT', icon: <DiGit />, exp: 'Básico' },
  { id: 'linux', name: 'Linux', icon: <DiLinux />, exp: 'Básico' },
  { id: 'photoshop', name: 'Photoshop', icon: <DiPhotoshop />, exp: 'Básico' }
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Habilidades</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
