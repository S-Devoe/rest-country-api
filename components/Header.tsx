import {FaGlobeAfrica} from 'react-icons/fa';
import DarkMode from './DarkMode';
function Header() {
  return (
    <header>
      <div className="header_content">
        <div className="svg"><FaGlobeAfrica /></div>
        <div className="title"> Where in the world?</div>
      </div>
      <DarkMode />
    </header>
  );
}
export default Header;
