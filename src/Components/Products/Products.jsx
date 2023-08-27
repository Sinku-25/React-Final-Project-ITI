import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getproducts } from '../../services/product.service';

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const getData = async () => {
    let data = await getproducts();
    const { products } = data;
    setProductsData(products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {productsData.map((productData) => (
          <div className="col-md-3 mb-4" key={productData.id}>
            <div className="card h-100">
              <img src={productData.thumbnail} alt={productData.title} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">{productData.description}</p>
                <p className="card-title">${productData.price}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <Link to={`/products/${productData.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <a href="#" className="btn btn-danger">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-dark text-white mt-5 p-2 text-center ">
        All rights are reserved ©2023
      </div>
    </div>
  );
}

export default Products;
