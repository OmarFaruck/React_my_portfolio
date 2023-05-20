
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import About from './Componant/Mainaboutpage/Aboutpage/About';
import Experience from './Componant/Mainexperiancepage/Experience/Experience';
import Homepage from './Componant/Mainhomepage/Homepage/Homepage';
import Portfolio from './Componant/Mainportfoliopage/Portfolio/Portfolio';
import Service from './Componant/Mainservicepage/Service/Service';
import Registration from './Componant/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<Homepage />} /> 
        <Route path="/home" element={<Homepage />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/registration" element={<Registration />} />   
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
