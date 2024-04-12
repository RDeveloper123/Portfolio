import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Project from './component/Project';
import Contact from './component/Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </HashRouter>
     
    </>
  );
}

export default App;
