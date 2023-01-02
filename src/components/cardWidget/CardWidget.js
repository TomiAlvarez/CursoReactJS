/*#########################################
                 Importaciones
#########################################*/

//Modulos
//Estilos
import "./CardWidget.css"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const CardWidget = (props) => {

    return(

        <div className="carrito">
            <img src=".././img/carrito.png"></img> {props.cantidad}
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default CardWidget