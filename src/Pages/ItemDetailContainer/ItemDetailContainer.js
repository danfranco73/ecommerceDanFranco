import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc} from "firebase/firestore";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const db = getFirestore();
  const docRef = doc(db, "items", id);

  getDoc(docRef)
    .then((doc) => {})
    .catch((error) => console.log("Error getting document:", error));

  useEffect(() => {
    const getProduct = () => {
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() });
        } else {
          console.log("No such document!");
        }
      });
    };

    getProduct();
  }, [docRef, id]);

  return (
    <div>
      <ItemDetail
        product={product}
        imagen={product.image}
        nombre={product.title}
        precio={product.price}
        stock={product.stock}
        descripcion={product.description}
        categoria={product.categoryId}
      />
    </div>
  );
};

export default ItemDetailContainer;
