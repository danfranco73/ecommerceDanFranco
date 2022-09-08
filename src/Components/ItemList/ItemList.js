import Item from "../Item/Item";

const ItemList = ({ lista }) => {
 
  return (
    <div>
      {lista.map((product) => {
        return (
          <Item
          
            key={product.id}
            nombre={product.nombre}
            precio={product.precio}
            imagen={product.imagen}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
