//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDetail, getProducts } from "../../Redux/action";

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  // const [products, setProducts] = useState(filtrados);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [productsToShow, setProductsToShow] = useState([]);

  useSelector((state) => state.getDetail);

  useEffect(() => {
    setMaxPage(Math.ceil(products.length / productsPerPage));
    setProductsToShow(
      products.slice((page - 1) * productsPerPage, page * productsPerPage)
    );
  }, [products, page, productsPerPage]);

  function handleNextPage() {
    if (page < maxPage) {
      setPage(page + 1);
    }
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleFirstPage() {
    setPage(1);
  }

  function handleLastPage() {
    setPage(maxPage);
  }

  function handleProductsPerPage(e) {
    setProductsPerPage(e.target.value);
  }
  const handleDetail = (e) => {
    dispatch(getDetail(e.target.value));
    navigate(`/product/${e.target.value}`);
  };

  return (
    <div>
      <div>
        <select onChange={handleProductsPerPage}>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div>
        {/* botones de paginacion bootstrap */}
        <button onClick={handleFirstPage} className="btn btn-primary">
          Primera
        </button>
        <button onClick={handlePrevPage} className="btn btn-primary">
          Anterior
        </button>
        <button onClick={handleNextPage} className="btn btn-primary">
          Siguiente
        </button>
        <button onClick={handleLastPage} className="btn btn-primary">
          Ultima
        </button>
      </div>

      <div>
        {/* mensaje de carga mientras se renderiza los productos */}

        {products.length === 0 ? (
          <h1>No hay productos con este Filtro</h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {products
          ?.slice((page - 1) * productsPerPage, page * productsPerPage)
          ?.map((product) => {
            return (
              <div className="card" key={product._id}>
                <div className="card-body">
                  <img src={product.image} alt={product.name} />
                  <h5 className="card-title">{product.name}</h5>
                  {/* //descricion con caracteres limitados a 100 */}
                  <p className="card-text">
                    {product.description.slice(0, 100)}...
                  </p>
                  <p className="card-text">${product.price}</p>
                  {/* usar getDetail para detalles del producto */}
                  <button
                    value={product._id}
                    onClick={handleDetail}
                    className="btn btn-primary"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
