import { Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Homepage from "./Homepage";


function Pages(){
    return (

        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="homepage" element={<Homepage />} />
        </Routes>

    )
}

export default Pages;