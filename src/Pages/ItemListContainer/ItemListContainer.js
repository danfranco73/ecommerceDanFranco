import data from "./Data";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {  
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getProducts.then((response) => {
      setProductList(response);
    });
    getProducts.catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="container d-flex flex-row" >
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainer;
