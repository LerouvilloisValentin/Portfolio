import "./app.css"
import { Routes, Route  } from 'react-router-dom';
import Home from "../Home"
import History from "../History";
import Mastery from "../Mastery";


function App(){
    return(
        <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/mastery" element={<Mastery/>}/>
        {/* <Route path="/projets" element={<Mastery/>}/> */}

        </Routes>
        </div>
    )
}

export default App;