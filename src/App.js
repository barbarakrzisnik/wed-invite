import nombres from "./img/nombres.png";
import linea from "./img/linea.png";
import mapita from "./img/mapa.png";
import "./App.scss";

const App = () => {
  return (
    <div className="contenedor-pagina">
      <div className="imagen">
        <img src={nombres} alt="titulo"></img>
      </div>
      <div>
        <p >
          DESPUÉS DE LA CEREMONIA TE ESPERAMOS EN EL CAMPO 7 HERMANOS, MARCOS
          PAZ
        </p>
      </div>
      <div className="mapa">
         <a className="link" href="https://goo.gl/maps/GegiV3zHCbUDBZSq9"><img className="imagen-mapa"z src={mapita} alt="mapa"></img></a>
         
      </div>
      <p>Hace click en el mapa para seguir el camino!</p>
      <div>
        <img src={linea} alt="linea"></img>
      </div>
      <h2>ALGUNAS COSAS A TENER EN CUENTA!</h2>
      <div className="cosas">
        <p className="cursiva">¿Qué pasa si llueve?  </p>
          <p>La fiesta es la misma, pero cambiamos de
          locación. Te vamos a avisar algunos días antes! Nos vamos a Mi Rancho - Newton y El Lirio, Ruta 3 km 39.5 - Virrey del Pino podes seguir la ubicación <a href="https://goo.gl/maps/fyAZpk5SvueLD7Py9">aca</a>! </p> 
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
