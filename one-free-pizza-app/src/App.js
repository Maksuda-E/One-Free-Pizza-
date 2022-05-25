import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Home from "./components/Home/Home";
import Pizza from "./components/Pizza/Pizza";
import Orders from "./components/Orders/Orders";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <MainMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-your-pizza" element={<Pizza />} /> 
        <Route path="/orders" element={<Orders />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
