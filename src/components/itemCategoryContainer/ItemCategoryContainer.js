/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useParams } from "react-router-dom"

//Estilos
import "./ItemCategoryContainer.css"

//Componentes
import ItemCategory from '../itemCategory/ItemCategory'

//Core

/*#########################################
                 Logica
#########################################*/

const ItemCategoryContainer = () => {

    const {categoriaId} = useParams()

    return(

        <section>
            <ItemCategory categoria={categoriaId}/>
        </section>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemCategoryContainer