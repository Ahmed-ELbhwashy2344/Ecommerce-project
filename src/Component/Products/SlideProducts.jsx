import { GoStarFill } from "react-icons/go";
import { PiStarHalfFill } from "react-icons/pi";
import { FaShare, FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { FaCheck } from "react-icons/fa";

function SlideProducts({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  // console.log(cartItems)
  const isInCart = cartItems.some((i) => i.id === item.id);
  return (
    <Link to={`/products/${item.id}`} className="block w-full ">
      <div className="group relative bg-white border border-black/10 rounded-2xl p-4 m-1.5 transition-all  duration-300 hover:ring-2 hover:ring-blue-400/50 hover:shadow-xl overflow-hidden">
        {/* Label: In Cart - تم تحسين مكانه */}
        {isInCart && (
          <div className="absolute top-3 left-3 z-10 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
            <FaCheck /> In Cart
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
          <img
            className="h-40 md:h-52 object-contain w-10/12 transition-transform duration-500 group-hover:scale-110"
            src={item.images[0]}
            alt={item.title}
          />

          {/* Side Actions - تظهر في الموبايل بشكل دائم وفي الكمبيوتر عند الـ Hover */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 group-hover:right-4 md:opacity-0 group-hover:opacity-100 flex flex-col gap-3 transition-all duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!isInCart) addToCart(item);
              }}
              className={`p-3 rounded-full shadow-lg transition-colors ${
                isInCart
                  ? "bg-green-500 text-white"
                  : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <GiShoppingCart className="text-xl" />
            </button>

            <button className="p-3 bg-white text-gray-400 rounded-full shadow-lg hover:text-red-500 transition-colors">
              <FaRegHeart className="text-xl" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-gray-800 font-medium text-sm md:text-base line-clamp-1 group-hover:text-blue-500 transition-colors">
            {item.title}
          </h3>

          {/* Rating */}
          <div className="flex mt-2 text-yellow-400 text-sm">
            <GoStarFill /> <GoStarFill /> <GoStarFill /> <GoStarFill />{" "}
            <PiStarHalfFill />
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-xl text-blue-600">
              ${item.price}
            </span>
            {/* ممكن تضيف زرار صغير للموبايل هنا لو حابب */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SlideProducts;
