import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Characters from "./Components/Character/Characters";
import CharacterById from "./Components/CharacterById/CharacterById";

const App = () => {


  return (
   
    <div>
     {<Header/>}
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters" element ={<Characters />} />
            <Route path="/character/:id" element ={<CharacterById />} />
       </Routes>
    </div>
  )
}

export default App