import { Link, useLocation } from 'react-router-dom';
import '../app.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav id='headerBackground' className='position-relative'>
    <h1 className='px-5 py-3'>McKay Atkinson</h1>  
    <ul className="nav nav-tabs end-0 w-100 d-flex flex-row justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active text-primary' : 'nav-link text-white'}
        >
          <strong>About Me</strong>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active text-primary' : 'nav-link text-white'}
        >
          <strong>Portfolio</strong>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active text-primary' : 'nav-link text-white'}
        >
          <strong>Contact Me</strong>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active text-primary' : 'nav-link text-white'}
        >
          <strong>Resume</strong>
        </Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
