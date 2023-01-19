/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useState } from "react"

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
            <p>
                ItemListContainer {props.greeting}
            </p>
            <ItemList/>
        </div>
    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemListContainer