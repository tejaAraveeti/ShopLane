
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Endpoints from '../Api/Endpoint';
import Categories from './Categories';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function WomenclothingCat() {
  const {id}= useParams()

  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing/")
      .then((response) => {
        setProducts(response.data)
      }).catch((err) => console.log(err))
  };
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
     <Categories/>
      <div>
        <div className="container">
          <div className="row">

            {
            // products &&
            products.map((product) => 

              <div class="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  
                  <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                  <div class="card-body">
                    <p>BRAND</p>
                    <h5 class="card-title mb-0">{product.title}</h5>
                    <p class="card-text">${product.price}</p>
                    <Link to={'products/detail/' +product.id} class="btn btn-primary">Add to cart</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )

}
export default WomenclothingCat