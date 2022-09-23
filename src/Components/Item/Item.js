import "./items.css";

const Item = ({ nombre, precio, imagen, categoria}) => {
  return (
    <div className="items">
      <img className="img-sku" src={imagen} alt={nombre} />
      <h2 className="desc-sku">{nombre}</h2>
      <h2 className="desc-sku">Categoría {categoria}</h2>
      <h3 className="precio-sku">$ {precio}</h3>
    </div>
  );
};

export default Item;
