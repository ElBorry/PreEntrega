import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/CartProvider";
import styles from "./ItemDetailContainer.module.css"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const { addItem } = useContext(CartContext);

    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response);
        })
        .catch(() => {
            setItem(null);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [id]);

    return (
    <div div className={`${styles.backgroundColor} p-2`}>
    <ItemDetail  item={item} isLoading={isLoading} addItem={addItem} />;
    </div>
    )
};

export default ItemDetailContainer;