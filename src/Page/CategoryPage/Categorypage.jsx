import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SlideProducts from '../../Component/Products/SlideProducts'
import Products from '../../Component/Products/Products'

export default function Categorypage() {
    const {Category} = useParams()
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async () => {
      const results = await axios.get(`https://dummyjson.com/products/category/${Category}`)
      setProducts(results.data.products)
      console.log(results.data.products);
      
    },[Category])
    useEffect(() => {
      
    getProducts()
    }, [getProducts])
    
  return (
    <div className='pt-48 container mx-auto'>
        <div className='px-6'>
        <h1 className=" text-blue-500 text-3xl font-semibold capitalize ">
        {Category.replace('-' , ' ')} : {products.length}
      </h1>
      <p className="mt-2 text-[#6a6a6a] border-b-[1px] pb-3 border-black/10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maxime?
      </p>
      <div className="border-[1px] border-blue-400 w-1/8"></div>
        </div>
     <div className=' flex flex-wrap '>
        {products.map((item , index) => (
            <div className=' md:w-1/4 w-1/2 '>
              <SlideProducts item={item} key={index } />
            </div>
        ))}
     </div>
        
    </div>
  )
}
