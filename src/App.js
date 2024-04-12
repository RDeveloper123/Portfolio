import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Project from './component/Project';
import Contact from './component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
