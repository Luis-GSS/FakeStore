import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { NavLink } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  //const [productsPerPage, setProductsPerPage] = useState(6);
  //const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const productList = async () => {
    const data = await fetch("https://fakestoreapi.com/products"); //consume API
    if (componentMounted) {
      const products = await data.clone().json(); // Json porque sino no salen los datos del API y salen datos extras
      const filter = await data.json();
      setProducts(products);
      setFilter(filter);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    productList();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const searchProduct = (e) => {
    console.log(e);
    const updatedList = products.filter((x) =>
      x.title.toLowerCase().includes(e.toLowerCase())
    );
    setFilter(updatedList);
  };

  const Carousel = () => {
    // IDs de las imágenes que deseas mostrar en el carrusel
    const desiredIds = [1, 2, 3, 4, 7, 9, 12, 16, 17, 18, 19, 20]; // Puedes ajustar estos IDs según tus necesidades

    // Filtra solo las imágenes que tienen IDs en el conjunto desiredIds
    const filteredImages = filter.filter((product) =>
      desiredIds.includes(product.id)
    );

    return (
      <div id="carouselExampleCaptions" className="carousel slide my-2">
        <div className="carousel-inner">
          {filteredImages.map((product, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100%" }}
              >
                <img
                  src={product.image}
                  className="d-block mx-auto"
                  style={{ maxWidth: "25%", maxHeight: "25%" }}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="carousel-caption d-none d-md-block text-secondary fw-bold">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev btn btn-outline-dark"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="carousel-control-next btn btn-outline-dark"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  const SearchBox = () => {
    const [search, setSearch] = useState("");
    return (
      <>
        <div className="card-body d-flex justify-content-between py-5">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control form-control-lg rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => {
                searchProduct(search);
              }}
            >
              <i className="fa fa-search fa-lg"></i>
            </button>
          </div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Carousel />
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 mb-1">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
            <SearchBox />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <Pagination />
    </>
  );
};
