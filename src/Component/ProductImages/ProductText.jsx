import React, { useContext } from 'react'
import { FaRegHeart, FaShare } from 'react-icons/fa'
import { GoStarFill } from 'react-icons/go'
import { GrCart } from 'react-icons/gr'
import { PiStarHalfFill } from 'react-icons/pi'
import { CartContext } from '../CartContext/CartContext'

export default function ProductText({product}) {
   const {cartItems , addToCart} = useContext(CartContext)
 // console.log(cartItems)
  const isInCart = cartItems.some(i=> i.id === product.id )

  return (
    <div className='w-full md:w-1/2 flex flex-col  items-center mt-10'>
        <h1 className='text-blue-400 font-semibold text-5xl mb-5 capitalize' >{product.title}</h1>
        <div className=" flex mt-2 text-yellow-400 mb-5">
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <PiStarHalfFill />
        </div>  
        <p className='font-bold text-2xl mb-5'>${product.price}</p>      
        <p className=' font-semibold mb-5'>Availability:<span className='text-blue-400'>{product.availabilityStatus}</span></p>
        <p className=' font-semibold mb-5'>Brand:<span className='text-blue-400'>{product.brand}</span></p>
        <p className='text-[#6a6a6a] mb-5'>{product.description}</p>
        <p className='text-blue-400 text-xl font-bold mb-5'>Harry up! only {product.stock} product left in stock</p>
        <button onClick={(e) => {e.preventDefault(); 
          if (!isInCart)
            return addToCart(product)
          }} className={` bg-blue-400 mb-5 block text-white rounded-xl p-2 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-110  duration-300 ease-in-out transition-all ${isInCart? 'bg-white border-[1px] border-blue-400 pointer-events-none text-blue-400!' : ''}`}>{isInCart? 'Item in card ' : 'Add To Cart'}<span className=' ml-2 inline-block'><GrCart /></span> </button>
        <ul className=' flex gap-x-4 text-xl ' >
        <li className='bg-[#d2ceced3] p-1.5 rounded-full hover:bg-blue-400 duration-300 ease-in-out transition-all   hover:text-white' > <FaRegHeart /></li>
        <li className='bg-[#d2ceced3] p-1.5 rounded-full hover:bg-blue-400 duration-300 ease-in-out transition-all   hover:text-white' > <FaShare /></li>
         
        </ul>
        </div>
  )
}
