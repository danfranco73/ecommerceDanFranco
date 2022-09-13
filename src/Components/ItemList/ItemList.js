import Item from "../Item/Item";

const ItemList = ({ lista }) => {
 
  return (
    <>
    {lista.map((product) => {
      return (
          <Item className="items"
          
            key={product.id}
            nombre={product.nombre}
            precio={product.precio}
            imagen={product.imagen}
            stock={product.stock}
          />
      );
    })}
    </>
  );
};


export default ItemList;
