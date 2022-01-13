import {ReactComponent as GithubIcon} from 'assets/img/github_icon.svg';
import "./styles.css";
function Navbar(){
    
    return(

        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <a href="https://github.com/Nathan-Crizanto">
              <div className='dsmovie-contact-container'>
                <GithubIcon />
                <p className='dsmovie-contact-link'> /DevSuperior</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;