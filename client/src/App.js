import './App.css';
import Layout from './components/layout/Layout/Layout';
import About from './pages/About/About';
import TechStack from './pages/TechStack/TechStack';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import MobileNav from './components/mobileNav/mobileNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <MobileNav/>
      <Layout />
      <About/>
      <TechStack/>
      <Education/>
      <Project/>
      <Contact/>

    </>
  );
}

export default App;