import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import Products from './pages/Products';
import Contact from './pages/Contact';

// Nested Routing 
import ServicesLayout from './components/ServicesLayout';
import WebDev from './pages/WebDev';
import AppDev from './pages/AppDev';
import UiUx from './pages/UiUx';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<WebDev />} /> 
          <Route path="web-development" element={<WebDev />} />
          <Route path="app-development" element={<AppDev />} />
          <Route path="ui-ux-design" element={<UiUx />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
