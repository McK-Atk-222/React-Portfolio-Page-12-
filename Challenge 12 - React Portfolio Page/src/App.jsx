// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <body id='viewport' className="bg-dark text-white navbar-right container-flex ">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      </body>
    </>
  );
}

export default App;

