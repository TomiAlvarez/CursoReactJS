/*#########################################
                 Importaciones
#########################################*/

//Modulos

//Estilos
import "./ItemListContainer.css"

//Componentes
import ItemList from "../itemList/ItemList"

//Core

/*#########################################
                 Logica
#########################################*/

const ItemListContainer = (props) => {

    return(

        <div>
            <ItemList/>
        </div>
    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemListContainer