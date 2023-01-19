/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useState, useEffect } from "react"

//Estilos
import "./ItemList.css"

//Componentes
import Item from "../item/Item"

//Core

/*#########################################
                 Logica
#########################################*/

const ItemList = (props) => {

    const [productos, setProductos] = useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
},[])

    return(

        <div>
            <p>ItemList</p>
            {productos}
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemList