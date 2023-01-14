import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
  cleanFilter,
  filterProductsPrice,
} from "../../Redux/action";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Productos from "../Products/Productos";
import NavbarMain from "../NavbarMain/NavbarMain";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [brand, setBrand] = useState();
  //filtro por precio usando filterProductsPrice de action.js
  const handleChangePrice = (value) => {
    setSelectedPrice(value);
    dispatch(filterProductsPrice(value));
  };
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [price, setPrice] = useState();

  const getBrand = () => {
    const marcas = AllProducts.map((e) => e.brand).sort(function (a, b) {
      if (a < b) return -1;
      else return 1;
    });
    const uniqueBrands = [...new Set(marcas)];
    setBrand(uniqueBrands);
  };

  const getCategories = () => {
    const categories = AllProducts.reduce((acc, product) => {
      acc[product.categories] = true;
      return acc;
    }, {});
    const uniqueCategories = Object.keys(categories);
    setCategory(uniqueCategories);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AllProducts.length) dispatch(getProducts());
    setFiltrados(Products);
    getCategories();
    getBrand();
  }, [dispatch, Products]);

  const handleChangeCategory = (value) => {
    setSelectedCategory(value);
    dispatch(filterProductsCategory(value));
  };
  const handleChangeBrand = (value) => {
    setSelectedBrand(value);
    dispatch(filterProductsBrand(value));
  };

  const handleCleanFilter = () => {
    setSelectedCategory("Categoria");
    setSelectedBrand("Marca");
    dispatch(cleanFilter());
  };

  return (
    <>
      <div>
        <Header />
        <NavbarMain />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-header">
                  <h5>Filtros</h5>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Categoria</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedCategory}
                      onChange={(e) => handleChangeCategory(e.target.value)}
                    >
                      <option>Categoria</option>
                      {category && category.map((e,i) => <option key={i}>{e}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Marca</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedBrand}
                      onChange={(e) => handleChangeBrand(e.target.value)}
                    >
                      <option>Marca</option>
                      {brand && brand.map((e, i) => <option key={i}>{e}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Precio</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedPrice}
                      onChange={(e) => handleChangePrice(e.target.value)}
                    >
                      <option>Price</option>
                      <option>Menor a mayor</option>
                      <option>Mayor a menor</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={() => handleCleanFilter()}
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <Productos products={filtrados} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageProducts;
