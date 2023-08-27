import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyResume from './HomePage/MyResume';
import Header from './HomePage/Header';
import ResumeTemplate from './HomePage/ResumeTemplate';
import Dummy from './HomePage/Dummy';
import AboutUs from './HomePage/AboutUs';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="*" element={<ResumeTemplate/>} />
    <Route path="/myresume" element={<MyResume/>} />
    <Route path="/aboutus" element={<AboutUs/>} />  
    <Route path="/dummy" element={<Dummy/>} /> 
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;