import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import SearchBox from "../Search/SearchBox";

function TopHeader() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="container mx-auto p-3 flex flex-wrap justify-between items-center gap-y-4">
        {/* الـ Logo */}
        <Link className="w-22" to="/">
          <img src="/img/icon.png" alt="Logo" className="w-full" />
        </Link>{" "}
        <SearchBox />
        <div className="flex items-center ">
          {/* <div className="inline-block relative cursor-pointer">
            <FaHeart className="text-5xl md:text-3xl text-blue-900" />
            <span className="absolute -top-2 -right-2 flex justify-center items-center bg-blue-400 text-white w-5 h-5 rounded-full text-xs">
              0
            </span>
          </div> */}

          <Link to="/Cart">
            <div className="inline-block relative ml-4 cursor-pointer">
              <TiShoppingCart className="text-5xl md:text-3xl text-blue-900" />
              <span className="absolute -top-2 -right-2 flex justify-center items-center bg-blue-400 text-white w-5 h-5 rounded-full text-xs">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
    // <div>
    //   <div className=' container mx-auto p-3 flex justify-between items-center '>
    //     <Link className='w-1/8' to='/'><img src="/img/icon.png" alt="" /></Link>
    //     <SearchBox/>
    //       <div>
    //         <div className=' inline-block relative  cursor-pointer '>
    //         <FaHeart className='text-3xl text-blue-900'/>
    //         <span className=' absolute -top-2 -right-2  flex justify-center items-center  bg-blue-400 text-white! w-5 h-5 rounded-full'>0</span>
    //         </div>
    //         <Link to='/Cart'>
    //           <div className=' inline-block relative ml-4 cursor-pointer '>
    //            <TiShoppingCart className='text-3xl text-blue-900' />
    //            <span className=' absolute -top-2 -right-2  flex justify-center items-center  bg-blue-400 text-white! w-5 h-5 rounded-full'>{cartItems.length}</span>
    //           </div>          
    //          </Link>
    //       </div>
    //       </div>
    // </div>
