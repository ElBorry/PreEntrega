import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    setIsLoading(true);

    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    });
  }, [categoryId]);

  return (
  <div className={`${styles.backgroundColor} p-2`}>
  <ItemList className="text-center" items={items} isLoading={isLoading} />
  </div>
  )
};

export default ItemListContainer;

