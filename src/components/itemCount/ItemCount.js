/*#########################################
                 Importaciones
#########################################*/

//Modulos
import { useState } from "react"
//Estilos
import "./ItemCount.css"
//Componentes
//Core

/*#########################################
                 Logica
#########################################*/

const ItemCount = (props) => {

    const[count, setCount] = useState(0)

    const addOne = () => {
        if(count < props.stock) {
            setCount(count + 1)
            props.guardarCantidadAComprar(count)
        }
    }

    const disOne = () => {
        if(count > 0) {
            setCount(count - 1)
            props.guardarCantidadAComprar(count)
        }
    }

    return(

        <div className="contenedorCount">
            <div className="contenedorCountHijo">
                <button onClick={disOne}>-</button>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
            </div>
        </div>

    )

}

/*#########################################
                 Exportaciones
#########################################*/

export default ItemCount