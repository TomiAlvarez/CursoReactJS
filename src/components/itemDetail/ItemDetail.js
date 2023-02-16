/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useState } from "react"
//Estilos
import "./ItemDetail.css"
import ItemListContainer from "../itemListContainer/ItemListContainer"

//Componentes
import ItemCount from "../itemCount/ItemCount"
import { useCartContext} from "../../context/CartContext"
//Core

/*#########################################
                 Logica
#########################################*/

const ItemDetail = (props) => {

    const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0)

    const {id, title, category, description, price} = props.data

    const {agregarAlCarrito} = useCartContext()

    const funcionDelHijoDeGuardarCantidad = (cantidadX) => {
        setCantidadDeProductosAComprar(cantidadX)
    }

    const onAdd = () => {

        if(cantidadDeProductosAComprar != 0) {
            const producto = {
                id:id,
                title:title,
                category:category,
                price:price,
                count:cantidadDeProductosAComprar,
            }

        agregarAlCarrito(producto)
    }else{
        alert("Por favor añada la cantidad de productos que desee.")
    }
    }

    return(

        <article>
            <h2>DETALLE DEL PRODUCTO</h2>
            <div className="item">
                <h4 className="categoriaProducto">Category: {category}</h4>
                <h3 className="tituloProducto">{title}</h3>
                <p className="parrafo">{description}</p>
                <p className="parrafo">Price: ${price}</p>
                <ItemCount stock={10} guardarCantidadAComprar={funcionDelHijoDeGuardarCantidad}/>
                <button onClick={onAdd}>on Add</button>
            </div>  
            <h2>MAS PRODUCTOS</h2> 
            <ItemListContainer/>   
        </article>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemDetail