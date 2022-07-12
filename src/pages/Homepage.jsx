import { useState } from "react";
import alertaa from "../components/alertaa";

function HomePage(){
    let btn = "Hazme click";
    

    const [texto, setTexto] = useState("");

    return(
        <>
            <h1>This is homePage | {texto}</h1>
            <input type="submit" value={btn} onClick={alertaa}/><br/>
            <input value={texto} onChange={(a)=>setTexto(a.target.value)}/>
        </>
    )
}

export default HomePage;