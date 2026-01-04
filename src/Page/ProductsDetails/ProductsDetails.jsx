import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Products from '../../Component/Products/Products';
import ProductImages from '../../Component/ProductImages/ProductImages';
import ProductText from '../../Component/ProductImages/ProductText';

function ProductsDetails() {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  const [relatedLoading, setRelatedLoading] = useState(true)
  const [loading, setLoading] = useState(true)
  
const products = useCallback(async ()=>{
  try {
const results = await axios.get(`https://dummyjson.com/products/${id}`)
setProduct(results.data)
//console.log(results);

  setLoading(false)
 } catch (error) {
    console.log(error);
    
  }

},[id])
useEffect(()=> {
  products()
}, [id])
const relatedProducts = useCallback(async () => {
 try {
const relatedResults = await axios.get(`https://dummyjson.com/products/category/${product.category}`)

setRelatedProduct(relatedResults.data.products)  
  //console.log(relatedResults.data.products);
 } catch (error) {
  console.log(error);
 } finally{
  setRelatedLoading(false)
 }

}, [product.category ])

useEffect(() => {
  if (product?.category) {
    relatedProducts();
  }
}, [product.category , relatedProducts]);

if(loading) return <p>Loading....</p>



  return (
    <div>
      <div className='flex flex-wrap'>
        <ProductImages  product={product} />
        <ProductText   product={product} />
      </div>
     {relatedLoading? (
      <p>losding....</p>
      
     ):(
       <Products category={product.category}   data={relatedProduct} />
     )}
    </div>

    
  )
}

export default ProductsDetails