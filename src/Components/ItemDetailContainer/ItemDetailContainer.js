import data from '../ItemListContainer/Data';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./I-D-Container.css"

const ItemDetailContainer = () => {
  const [Producto, setProducto] = useState([]);
  useEffect(()=>{
      const getProducto = new Promise((resolve)=>{
          setTimeout(()=>{
              resolve(data);
          },2000);
      }
      );
      getProducto.then((response)=>{
          setProducto(response);
      });
      getProducto.catch((error)=>{
          console.log(error);
      })
  },[]);
  return (
    <>
      <h1 className="I-D-Container">Producto Detallado</h1>
      <ItemDetail itemD={Producto} />
    </>
  );
};

export default ItemDetailContainer;
