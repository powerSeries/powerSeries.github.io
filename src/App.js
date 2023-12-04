import './App.css';

import Navbar from './components/navbar/navbar';

import Contact from "./pages/contact";
import Project from "./pages/project";
import Home from "./pages/home";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;