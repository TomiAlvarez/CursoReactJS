/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { Link } from "react-router-dom"

//Estilos
import "./NavBar.css"

//Componentes
import CardWidget from "../cardWidget/CardWidget.js"
import logo from "../../img/logo.png"
import carrito from "../../img/carrito.png"

//Core

/*#########################################
                 Logica
#########################################*/

const NavBar = () => {

    return(

    <header>
        <nav className="encabezado navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link to="/" className="divLogo">
            <img className="logo" src={logo} alt="HoodBurguer©"></img>
            </Link>
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
                <li><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/productos">Products</Link></li>
                <li><Link className="nav-link" to="/categoria/jewelery">Jewelery</Link></li>
                <li><Link className="nav-link" to="/categoria/electronics">Electronics</Link></li>
                <li><Link className="nav-link" to="/nosotros">About Us</Link></li>
                <li><Link className="nav-link" id="carrito" to="/carrito"><CardWidget/><img src={carrito}></img></Link></li>
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