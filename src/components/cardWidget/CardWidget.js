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
             {props.cantidad}
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default CardWidget