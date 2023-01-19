/*#########################################
                 Importaciones
#########################################*/

//Modulos
//Estilos
import "./Item.css"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const Item = (props) => {

    const {title, category, description, price} = props.data

    return(

        <div>
            <p>{category}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default Item