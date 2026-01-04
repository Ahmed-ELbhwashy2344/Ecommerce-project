import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SlideProducts from '../../Component/Products/SlideProducts'

export default function SearchResult() {
    const query = new URLSearchParams(useLocation().search).get('query')
    const [searchProduct, setSearchProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = useCallback(async () => {
        const result =await axios.get(`https://dummyjson.com/products/search?q=${query}`)
        setSearchProduct(result.data.products || [])
        console.log(result.data.products);
        setLoading(false)
    },[query])
useEffect(() => {
if(query) getProducts()
}, [getProducts])

  return <>
 
    <div className='container mx-auto'>
  {loading ? (
    <p>loading....</p>
  ) : searchProduct.length > 0 ? (
    <div className='px-6'>
      <h1 className="text-blue-500 text-3xl font-semibold capitalize">
        Results for {query.replace('-', ' ')} : {searchProduct.length}
      </h1>
      <div className='flex flex-wrap'>
        {searchProduct.map((item, index) => (
          <div className=' md:w-1/4 w-1/2'>
            <SlideProducts item={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  ):(<div className='text-center text-4xl pt-30 text-red-400'>No results found</div>)}
</div>
</>
}
