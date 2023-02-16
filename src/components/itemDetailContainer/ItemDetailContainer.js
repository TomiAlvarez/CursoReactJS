/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

//Estilos
import "./ItemDetailContainer.css"

//Componentes
import ItemDetail from '../itemDetail/ItemDetail'

//Core

/*#########################################
                 Logica
#########################################*/

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    const {productoId} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))
    },[productoId])

    return(

        <section>
            <Link to="/productos">Volver a productos</Link>
            {productos}
        </section>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemDetailContainer