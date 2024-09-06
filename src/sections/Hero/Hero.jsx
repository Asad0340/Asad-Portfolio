import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import TwitterLight from '../../assets/twitter-light.svg';
import TwitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? TwitterLight : TwitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img
       className={styles.Hero} src={heroImg} 
       alt="Profile Picture Of Asad Waseem"/>
       <img 
       className={styles.colorMode} src={themeIcon} 
       alt="Color Mode Icon" 
       onClick={toggleTheme}
       />
       </div>
       <div className={styles.info}>
          <h1>
            Asad <br/>
            Waseem
          </h1> 
          <h2> Frontend Developer</h2>
          <span>
            <a href="https://x.com/AsadWas84467747" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon"/>
            </a>
            <a href="https://github.com/Asad0340" target="_blank">
            <img src={githubIcon} alt="Github Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/asad-waseem-098a63188" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon"/>
            </a>
          </span>
          <p className={styles.description}>With a passion for developing modern React web apps </p>
          <a href={CV} download>
            <button className="hover" >Resume 

            </button>
            
          </a>
       </div>
  </section>
}
export default Hero