import {Navbar, Intro, About, Footer, Education, Projects, CommPortfolio, Resume} from './containers'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <div className="App__content">
            <Navbar/>
            <Routes>
              <Route path = "/" element = {
                <>
                  <Intro/>
                  <About/>
                </>
              }/>
              <Route path = "/education" element = {
                <>
                  <Education/>        
                </>
              }/>
              <Route path = "/projects" element = {
                <>
                  <Projects/>        
                </>
              }/>
              <Route path = "/cse300" element = {
                <>
                  <CommPortfolio/>        
                </>
              }/>
              <Route path = "/resume" element = {
                <>
                  <Resume/>        
                </>
              }/>
            </Routes>
          </div>
          <Footer/>                     
      </div>  
    </Router>
  );
}

export default App;
