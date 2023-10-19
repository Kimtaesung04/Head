import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import NavBarElements from './components/NavBar/NavBarElements';


const App = () => {

  return (
    <div className="App">
      <Router>
      <NavBarElements/>
        <Routes>
          <Route path = "/" Component={ Home } />
          <Route path = "/AboutMe" element={ <AboutMe/> } />
          <Route path = "/Projects" element={ <Projects/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
