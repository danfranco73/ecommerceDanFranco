import data from "../ItemListContainer/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    getProducts.then((response) => {
      setProduct(response.find((item) => item.id === id));
    });
    getProducts.catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (
    <div className="ItemListContainer">
      <ItemDetail
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
