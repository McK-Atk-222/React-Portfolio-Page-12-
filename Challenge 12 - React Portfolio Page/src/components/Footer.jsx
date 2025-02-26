import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="footer">
      <li className="footer-item">
        <a href="https://github.com/McK-Atk-222">
          Github
        </a>
      </li>
      <li className="footer-item">
        <a href="http://www.linkedin.com/in/mckay-atkinson-848187166">
          LinkedIn
        </a>
      </li>
      <li className="footer-item">
        <a href="https://stackoverflow.com/users/27903797/mckay-atkinson">
          Stackoverflow
        </a>
      </li>
    </ul>
  );
}

export default Footer;
