import "./app.css"
import { Routes, Route  } from 'react-router-dom';
import Home from "../Home"
import History from "../History";
import Mastery from "../Mastery";
import Projets from "../Projets";
import Contact from "../Contact";
import Error from "../Error";



function App(){
    return(
        <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/mastery" element={<Mastery/>}/>
        <Route path="/projets" element={<Projets/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>

        </Routes>
        </div>
    )
}

export default App;