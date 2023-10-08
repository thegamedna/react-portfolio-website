import './index.scss'
import LogoS from '../../assets/images/M-logos.jpeg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faFolder } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      <span
        className="sub-logo"
        style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}
      >
        Midun C
      </span>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="Projects-link"
          to="/Projects"
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
          {/* <FontAwesomeIcon icon="fa-solid fa-folder-gear" color="#4d4d4e" /> */}
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/midun-c-0712461b9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/thegamedna?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
