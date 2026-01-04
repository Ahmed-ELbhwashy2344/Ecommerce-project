import React, { useCallback, useContext } from "react";
import { CartContext } from "../../Component/CartContext/CartContext";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  const { cartItems , increaseProduct , decreaseProduct , removeProduct } = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.reduce((acc , item) => acc + item.price  * item.quantity, 0);
 
 

  return (
  <>
    {/* الحاوية الأساسية: جعلنا العرض كامل في الموبايل و 1/2 في الكمبيوتر */}
    <div className="mt-24 md:mt-48 w-[95%] md:w-2/3 lg:w-1/2 mx-auto border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden">
      
      <div className="p-4 md:p-6">
        <h1 className="text-blue-500 text-2xl md:text-3xl font-bold pb-4 border-b border-gray-100 flex justify-between items-center">
          Order Summary
          <span className="text-sm font-normal text-gray-400">({cartItems.length} Items)</span>
        </h1>

        {/* منطقة المنتجات: الارتفاع تلقائي في الموبايل ومحدد في الكمبيوتر */}
        <div className="overflow-y-auto max-h-[400px] md:max-h-[500px] custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-lg">Your Cart Is Empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-50 last:border-0" key={index}>
                
                {/* الجزء الأيسر: الصورة والبيانات */}
                <div className="flex flex-1 gap-4">
                  <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <img className="w-full h-full object-contain p-2" src={item.images[0]} alt={item.title} />
                  </div>
                  
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-bold text-gray-800 line-clamp-1">{item.title}</h3>
                      <p className="text-blue-500 font-semibold mt-1">${item.price}</p>
                    </div>

                    {/* عداد الكمية (Quantity) */}
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => decreaseProduct(item.id)} 
                        className="w-8 h-8 flex items-center justify-center rounded-l-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >-</button>
                      <span className="w-10 h-8 flex items-center justify-center border-y border-gray-200 font-bold text-sm text-blue-600">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => increaseProduct(item.id)} 
                        className="w-8 h-8 flex items-center justify-center rounded-r-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >+</button>
                    </div>
                  </div>
                </div>

                {/* الجزء الأيمن: زر الحذف - في الموبايل بجانب العداد، في الكمبيوتر في الآخر */}
                <div className="flex items-center justify-end sm:pr-4">
                  <button 
                    onClick={() => removeProduct(item.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                    title="Remove Item"
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer: المجموع والزرار */}
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <p className="font-medium text-gray-500 text-lg">Total Amount</p>
          <span className="text-blue-600 text-3xl font-black">${total.toFixed(2)}</span>
        </div>
        
        <button 
          className="bg-blue-600 hover:bg-blue-700 w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-100 transition-all transform hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2"
          type="submit"
        >
          Place Order
        </button>
      </div>
    </div>
  </>
);
    
    
  ;
}
