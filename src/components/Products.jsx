import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Endpoints from '../Api/Endpoint';
import { Link} from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL)
      .then((response) => {
        setProducts(response.data)
      }).catch((err) => console.log(err))
  };
  useEffect(() => {
    fetchData();
  }, [])
  const Whishlist=()=>{
      
  }
  return (
    
    <>
      <div>
        <div className="container">
          <div className="row">

            {
              // products &&
              products.map((product) =>

                <div class="col-md-3 mb-4">
                  <div class="card h-100 text-center p-4" key={product.id}>
                  <span class="heart-icon" onClick={Whishlist}><i class="fas fa-heart"></i></span>

                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
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
export default Products