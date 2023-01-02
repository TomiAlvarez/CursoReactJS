/*#########################################
                 Importaciones
#########################################*/

//Modulos
//Estilos
import "./NavBar.css"
import CardWidget from "../cardWidget/CardWidget.js"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const NavBar = () => {

    return(

    <header>
        <CardWidget cantidad="10"/>
        <nav className="encabezado navbar navbar-expand-lg">
        <div className="container-fluid">
            <a href="./index.html" className="divLogo">
            <img className="logo" src="../img/logo.png" alt="HoodBurguer©"></img>
            </a>
        <div className="divBoton col-3">    
          <a href="https://wa.me/5401140978790?text=Hola,%20quiero%20realizar%20un%20pedido." target="_blank">
              <button className="boton"><span>PEDÍ YA</span></button>
          </a>
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li><a className="nav-link" aria-current="page" href="index.html">Inicio</a></li>
                <li className="item"><a class="nav-link" href="menu.html">Menú</a></li>
                <li><a className="nav-link" href="contacto.html">Contacto</a></li>
                <li><a className="nav-link" href="sobre-nosotros.html">Nosotros</a></li>
                <li><a className="nav-link" href="preguntas-frecuentes.html">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default NavBar