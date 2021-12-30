import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from '../../../node_modules/firebase/firestore';
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";

const ItemDetailContainer = () => {    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() })
                setLoading(false);
            }
        })
    }, [id])

    if (loading) {
        return (
        <>
            <Loader />
        </>
        );
    }
    
    return(
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer
