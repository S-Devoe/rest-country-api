import Link from 'next/link';
import {FaGlobeAfrica} from 'react-icons/fa';
import DarkMode from './DarkMode';
function Header() {
  return (
    <header>
      <div className="header_content">
        <div className="svg">
          <FaGlobeAfrica />
        </div>
        <div className="title">
          {" "}
          <Link href={`/`}>Where in the world?</Link>
        </div>
      </div>
      <DarkMode />
    </header>
  );
}
export default Header;
