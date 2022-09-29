/* import data from "./Data";
 */import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection} from "firebase/firestore";

const ItemListContainer = () => {  
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  const getProducts = () => {
  const db=getFirestore();

  const queryFirebase= collection(db, "items");
  getDocs(queryFirebase).then((response) => {
    const data=response.docs.map((product) => {
    return {id: product.id, ...product.data()};
    });
    setProductList(data);
  });
  };



  useEffect(() => {

    getProducts();

  }, [ categoryId ]);
  

/*useEffect(() => {
   const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    getProducts.then((response) => {
      setProductList(response);
    });
    getProducts.catch((error) => {
      console.log(error);
    });
  }, []); */

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  );
};



export default ItemListContainer;
