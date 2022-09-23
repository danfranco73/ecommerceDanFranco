import data from "../ItemListContainer/Data";
import Item from "../../Components/Item/Item";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const getCategoria = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getCategoria.then((response) => {
      setProduct(response.find((item) => item.categoria === categoria));
    });
    getCategoria.catch((error) => {
      console.log(error);
    });
  }, [categoria]);

  return (
    <div className="ItemListContainer">
      <Item
        {...product}
        id={product.id}
        nombre={product.nombre}
        precio={product.precio}
        imagen={product.imagen}
        stock={product.stock}
        categoria={product.categoria}
      />
    </div>
  );
};

export default ItemDetailContainer;

