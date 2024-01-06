import './App.css';
import Home from "./pages/home.js";
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const value = {

    ripple: true
    
  };


  return (
    <>
      <PrimeReactProvider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
      </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}


