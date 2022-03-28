import nombres from "./img/nombres.png";
import linea from "./img/linea.png";
import mapita from "./img/mapa.png";
import "./App.scss";
import Mapa from "./Mapa";

const App = () => {
  return (
    <div className="contenedor-pagina">
      <div className="imagen">
        <img src={nombres}></img>
      </div>
      <div>
        <p>
          DESPUÉS DE LA CEREMONIA TE ESPERAMOS EN EL CAMPO 7 HERMANOS, MARCOS
          PAZ
        </p>
      </div>
      <div className="mapa">
         <a href="https://www.google.com/maps/dir/Parroquia+Virgen+de+las+Flores,+Juez+de+la+Gándara,+Morón,+Provincia+de+Buenos+Aires/-34.823175,-58.7835084/@-34.8052562,-58.8109793,15.67z/data=!4m14!4m13!1m10!1m1!1s0x95bcb89d87e7bc05:0x6e95892f14f8e247!2m2!1d-58.6149232!2d-34.6444808!3m4!1m2!1d-58.8057568!2d-34.7420002!3s0x95bceba1da1a5ec7:0xfeffaa2d7a9135b2!1m0!3e0?hl=es-AR"><img src={mapita}></img></a>
         
      </div>
      <p>Hace click en el mapa para seguir el camino!</p>
      <div>
        <img src={linea}></img>
      </div>
      <h2>ALGUNAS COSAS A TENER EN CUENTA!</h2>
      <div className="cosas">
        <p className="cursiva">¿Qué pasa si llueve?  </p>
          <p>La fiesta es la misma, pero cambiamos de
          locación! 
          Nos vamos a 
          Mi Rancho - Newton y El Lirio, Ruta 3 km 39.5 - Virrey del Pino 
          podes seguir la ubicación <a href="https://goo.gl/maps/fyAZpk5SvueLD7Py9">aca</a>! </p> 
          <p className="cursiva"> ¿Qué me pongo? </p>
          <p> Metele modo fiesta, pero venite cómodo! Elegante sport. Sport de zapatillas</p>
          <p className="cursiva">¿Regalo? </p>
          <p>Lo mas importante es tu presencia, pero si queres hacernos un
          regalo:</p>
          <div className="regalo">
                <p>Banco Galicia</p>
                <p>MARTIN IGNACIO</p>
                <p>CTA: 4022422-7 182-1</p>
                <p>CBU: 00701828-30004022422719</p>
                <p>ALIAS: SIGNO.BANDO.PAJARO</p>
          </div>
          <p className="cursiva"> ¿Donde confirmo asistencia? </p> 
          <p> Por whatsapp, por mail, por correo, por paloma mensajera, donde quieras. Solo asegurate de avisarnos antes del 8/4. Si tenes alguna restriccion alimentaria aclaralo asi lo tenemos en cuenta! </p>
      </div>
    </div>
  );
};

export default App;

{
  /* <Mapa 
    googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCLw479OYxdQt4kJfGgvPGlyq35JyYQTfM"
    /> */
}
