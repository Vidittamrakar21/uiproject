
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Skill from './components/skill/skill';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Lab from './components/uilab/lab';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';


function App() {
  return (
   <Router>
       <div className="App">
      <Navbar></Navbar>
        <Routes>
        <Route exact path='/' element={<><Home/> </>}></Route> 
        <Route exact path='/skill' element={<><Skill/> </>}></Route> 
        <Route exact path='/project' element={<><Project/> </>}></Route> 
        <Route exact path='/contact' element={<><Contact/> </>}></Route> 
        <Route exact path='/ui' element={<><Lab/> </>}></Route> 
        </Routes>
    </div>
   </Router>
  );
}

export default App;
