/*#########################################
                 Importaciones
#########################################*/

//Modulos
//Estilos
import "./Item.css"
import { Link } from "react-router-dom"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const Item = (props) => {

    const {title, category, description, price, id} = props.data

    return(

        <div className="item">
            <h4 className="categoriaProducto">Category: {category}</h4>
            <h3 className="tituloProducto">{title}</h3>
            <p className="parrafo">{description}</p>
            <p className="parrafo">Price: ${price}</p>
            <Link className="detalle" to={`/producto/${id}`}> Ver Detalle </Link>
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default Item