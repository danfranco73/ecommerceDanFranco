import Item from "../Item/Item";
import "../Item/ItemDetail.css";

const ItemDetail = ({ itemD }) => {

  return (
    
    <>
    {itemD.map((sku) => {
      return (
        <Item className="items-detail box"

          key={sku.id}
          nombre={sku.nombre}
          precio={sku.precio}
          imagen={sku.imagen}
          stock={sku.stock} />
      );
    })}
    </>
  );
};

        
        export default ItemDetail;
