/*#########################################
                 Importaciones
#########################################*/

//Modulos
//Estilos
import "./Footer.css"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const Footer = () => {

    return(


    <footer className="mFooter">
        <div className="footerTitulo">
            <h3>© Hood 2022 - Todos los derechos reservados.</h3>
        </div>
        <div className="redes">
            <ul>
                <li><a href="https://wa.me/5401140978790?text=Hola,%20quiero%20realizar%20un%20pedido." className="whatsapp" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                <li><a href="https://instagram.com/Hood" className="instagram" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
            </ul>
        </div>
    </footer>


    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default Footer