import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
    return (
        <nav className="nav-bar">
            <FontAwesomeIcon className="icon-bar" icon={faBars} />
            <button>Contact</button>
        </nav>
    );
}