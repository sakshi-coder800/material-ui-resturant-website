import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
function App() {
  return (
   <BrowserRouter>
   <Routes> 
    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/menu"  element={<Menu/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="*"  element={<PageNotFound/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
