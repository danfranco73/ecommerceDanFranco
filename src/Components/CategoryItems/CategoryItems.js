/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ItemList from '../../Components/ItemList/ItemList';

const CategoryItems = () => {
    const [productList, setProductList] = useState([]);
    const { categoryId } = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const queryFirebase = collection(db, 'items');
        const queryCategory = query(queryFirebase, where('categoryId', '==', categoryId));
        getDocs(queryCategory).then((response) => {
            const data = response.docs.map((product) => {
                return { id: product.id, ...product.data() };
            });
            setProductList(data);
        });
    };

    useEffect(() => {
        getProducts();
    }, [categoryId, getProducts]);

    return (
        <div>
            <ItemList lista={productList} />
        </div>
    );
};

export default CategoryItems;