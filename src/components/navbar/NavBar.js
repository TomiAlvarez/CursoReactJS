/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { Link } from "react-router-dom"

//Estilos
import "./NavBar.css"

//Componentes
import CardWidget from "../cardWidget/CardWidget.js"

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
                <li><Link className="nav-link" aria-current="page" to="/">Inicio</Link></li>
                <li className="item"><Link class="nav-link" to="/productos">Menú</Link></li>
                <li><Link className="nav-link" to="/contacto">Contacto</Link></li>
                <li><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="nav-link" to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>to
      </nav>
    </header>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default NavBar