import React from 'react'
import { Link } from 'react-router-dom'
function Categories() {
  const electronics = "Electronics";
  ;
    
  return (
    <>
   
      <div className="categories">
        <Link className="btn btn-link" to={"/"}>All</Link>
        <Link className="btn btn-link" to={"/" + electronics}>Electronics</Link>
        <Link className="btn btn-link" to={"/jewelery"}>Jewellery</Link>
        <Link className="btn btn-link" to={"/men's clothing"}>Men's Clothing</Link>
        <Link className="btn btn-link" to={"/women's clothing"}>Women's Clothing</Link>
      </div>
    </>
  )
}

export default Categories
