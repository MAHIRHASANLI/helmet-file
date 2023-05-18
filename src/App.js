
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './companent/Header';
import Footer from './companent/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

function App() {
  return (
<>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>
<Footer/>
</>
  );
}

export default App;
