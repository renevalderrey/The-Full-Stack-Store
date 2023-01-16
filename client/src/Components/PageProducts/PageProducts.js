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
  const [selectedSort, setSelectedSort] = useState("Price");
  const [brand, setBrand] = useState();
  const sort =["Menor a mayor","Mayor a menor"]


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
    // setFiltrados(Products);
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
  //filtro por precio usando filterProductsPrice de action.js
  const handleChangePrice = (value) => {
    setSelectedSort(value)
    dispatch(filterProductsPrice(value));
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
                      onChange={(e) =>handleChangePrice(e.target.value)}
                    ><option>Price</option>
                      {sort && sort.map((e, i) => <option key={i}>{e}</option>)}
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
           
                    <Productos/>
           
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
