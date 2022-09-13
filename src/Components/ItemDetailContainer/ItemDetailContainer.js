import data from "./Data1";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemListContainer/ItemListContainer.css";


const ItemDetailContainer = () => {
  const [Producto, setProducto] = useState([]);
  useEffect(() => {
    const getProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getProducto.then((response) => {
      setProducto(response);
    });
    getProducto.catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div ClassName="ItemListContainer">
      <h3>Producto Detallado</h3>
      <ItemDetail lista={Producto} />
    </div>
  );
};

export default ItemDetailContainer;
