import bookmarkLogo from '../assets/images/logo.svg'
import '../index.css'
import MobileMenu from './MobileMenu';

function Header() {
    return (
        <div className='header flex'>
            <img className='header-child' src={bookmarkLogo} />
            <MobileMenu />
        </div>
    );
}

export default Header