import bookmarkLogo from '../assets/images/logo.svg'
import hamIcon from '../assets/images/icon-hamburger.svg'
import '../index.css'

function Header() {
    return (
        <div className='header flex'>
            <img className='header-child' src={bookmarkLogo}/>
            <img className='header-child' src={hamIcon}/>
        </div>
    );
}

export default Header