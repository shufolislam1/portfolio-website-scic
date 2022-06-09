import './App.css';
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer'
import Projects from './Pages/Projects/Projects';
import { ContactUs } from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div>
      <Home></Home>
      <Projects></Projects>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
