import NavBar from "./NavBar";
import ServiceCard from "./ServiceCard";

export default function Presentation(){
    return(
        <div className="main-container">
            <NavBar/>
            <div className="info">
                <h1>Encuentra los mejores servicios para tu negocio</h1>
                <span>Contamos con una alta variedad de servicios y ofertas en casi todas las áreas. ¿Qué esperas? anímate y digitaliza la manera en que trabajas.</span>
            </div>
            <div className="s-container">
                <ServiceCard title="Postea tus servicios" mininfo="Ponte en la suma ahora >"/>
                <ServiceCard title="Busca proyectos en los que puedas trabajar" mininfo="¿Qué son los camaroncitos?"/>
                <ServiceCard title="Ayudanos a fichar talentos" mininfo="¿Cómo asi?"/>
                <ServiceCard title="Texto de prueba" mininfo="blbalbala"/>
            </div>
        </div>
    )
}