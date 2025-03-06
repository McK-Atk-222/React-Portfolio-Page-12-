import { Link, useLocation } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";
import { FaStackOverflow , FaLinkedin } from "react-icons/fa";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className='container-flex text-center fs-1 py-3 '>
    <ul className="list-group list-group-horizontal w-100 justify-content-center">
      <li className="list-group-item bg-transparent border-0">
        <a href="https://github.com/McK-Atk-222">
          <AiOutlineGithub />
        </a>
      </li>
      <li className="list-group-item bg-transparent border-0">
        <a href="http://www.linkedin.com/in/mckay-atkinson-848187166">
          <FaLinkedin />
        </a>
      </li>
      <li className="list-group-item bg-transparent border-0">
        <a href="https://stackoverflow.com/users/27903797/mckay-atkinson">
          <FaStackOverflow />
        </a>
      </li>
    </ul>
    </footer>
  );
}

export default Footer;
