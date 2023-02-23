import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Experience from './component/Experience/Experience';
import Education from './component/Education/Education';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        
        <Route path='/experience' element={<Experience/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
