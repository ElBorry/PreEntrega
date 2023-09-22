import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            <h1>ItemList</h1>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <h3 className="titulo">{item.title}</h3>
                            <p className="m-1 mb-5">${item.price}</p>
                            <div className="card m-3" style={{width: "18rem"}}>    
                            <img src={`/${item.imageId}`} />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;


