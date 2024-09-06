import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
     <h1 className="sectionTitle">Projects</h1>
     <div className={styles.projectsContainer}>
     <ProjectCard src={Viberr} link='https://github.com/Asad0340/Design-Pattern' 
     h3="Viberr" 
     p="Streaming App"
     />

     <ProjectCard src={freshBurger} link='https://github.com/Asad0340/Design-Pattern' 
     h3="Fresh Burger" 
     p="Hamburger Restaurant"
     />
     <ProjectCard src={hipster} link='https://github.com/Asad0340/Design-Pattern' 
     h3="Hipsster" 
     p="Glasees Shop"
     />
     </div>
    </section>
  )
}

export default Projects