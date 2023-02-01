import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ producto }) => {

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-thumbnail" src={producto.foto} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nombre del Producto: {producto.name}</h5>
              <h6>Categoría: {producto.categoria}</h6>
              <h6>Precio: {producto.price}</h6>
              <p className="card-text">{producto.descripcion}</p>
            </div>
            <Link to= '/'><button>Seguir comprando</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
