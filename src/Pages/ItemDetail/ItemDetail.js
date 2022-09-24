import Counter from "../../Components/Counter/Counter";
import "./itemDetail.css";

export const ItemDetail = ({ ...product }) => {
  return (
    <div className="box">
      <div>
        <img className="img-sku" src={product.imagen} alt={product.nombre} />
      </div>
      <div className="detail-sku">
        <div className="items">
          <h2 className="desc-sku">Artículo: {product.nombre}</h2>
          <p className="desc-sku">Marca: {product.marca}</p>
          <p className="desc-sku">Categoría: {product.categoria}</p>
          <p className="desc-sku">Descripción: {product.descripcion}</p>
        </div>
        <div className="box2">
          <p className="precio-sku">${product.precio}</p>
          <p className="desc-sku">Stock: {product.stock} unidades</p>
          <div className="counter-detail">
            <Counter stock={product.stock} id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
