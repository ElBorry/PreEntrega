import PropTypes from "prop-types";
import "./ItemDetail.css"


const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

    if (!item) {
        return <h2>Producto no disponible</h2>;
    }
    return (
      <div className="backgroundDetail text-white p-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-center mt-5">
          <div className="me-2 col-7 text-center" >    
            <img src={`/${item.imageId}`} className="imgStyle"/>
          </div>
          <div className="backgroundDetail text-white p-5">
          <h1 className="titulo"><strong>{item.title}</strong></h1>
          <p className="texto">{item.description}</p>
          <p className="titulo"><strong>${item.price}</strong></p>
          
          <p className="alineacion"><strong>Categoría: {item.categoryId}</strong></p>
          <button className="btn btn-primary ms-5" onClick={() => addItem(item, 1)}><strong className="alineacion">Agregar al carrito</strong></button>
        </div>
        </div>
        </div>
      );
    };
    
    ItemDetail.propTypes = {
      item: PropTypes.object,
      isLoading: PropTypes.bool,
      addItem: PropTypes.func,
    };
    
    export default ItemDetail;