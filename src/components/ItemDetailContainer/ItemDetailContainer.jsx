import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gFetch from "../../utils/gFetch";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const {detailId} = useParams()
    const [producto, setProducto] = useState({})
    

    useEffect(() => {
        gFetch(detailId)
          .then(resp => setProducto(resp))
          .finally(console.log(detailId))
      }, [])
console.log(producto)
    return(
        
        <> <ItemDetail producto={producto} /></>
    )
}


export default ItemDetailContainer