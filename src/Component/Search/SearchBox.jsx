import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SearchBox() {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm.trim())
        {
        navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSearchSuggestions([])
    }

    const suggestions = useCallback(async () => {
      if(!searchTerm.trim())
      {
        setSearchSuggestions([])
         return;
      }
     
      try {
       
        const results = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
      setSearchSuggestions(results.data.products.slice(0,5))
      console.log(searchSuggestions);
      
    
      } catch (error) {
        console.error(error)
        setSearchSuggestions([])
      }
    } ,[searchTerm])

    useEffect(() => {
   
    const delay = setTimeout(() => {
      suggestions()
    }, 500);
    return () => clearTimeout(delay)
    }, [suggestions])
    useEffect(() => {
      setSearchSuggestions([])
    }, [location])
    
    
   return (
  <div className="order-last w-full md:order-none md:w-2/5 lg:w-1/3 relative"> {/* Container relative لضبط القائمة */}
    <form onSubmit={handleSubmit} className="flex items-center relative">
      <input
        className="border-2 border-blue-400 rounded-full py-2 px-4 pr-16 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
        autoComplete="off"
        type="text"
        placeholder="Search For Products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        className="text-white flex justify-center items-center absolute right-0 rounded-r-full cursor-pointer bg-blue-400 w-[55px] h-full hover:bg-blue-500 transition-colors" 
        type="submit"
      >
        <FaSearch />
      </button>
    </form>

    {/* قائمة الاقتراحات المحسنة */}
    {searchSuggestions.length > 0 && (
      <ul className="z-[100] absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden">
        {searchSuggestions.map((item, index) => (
          <Link 
            key={index} 
            to={`/products/${item.id}`}
            onClick={() => setSearchSuggestions([])} // إخفاء القائمة بعد الضغط
          >
            <li className="flex items-center gap-3 p-3 hover:bg-blue-50 border-b border-gray-50 last:border-0 transition-colors">
              {/* صورة مصغرة للمنتج تزيد الاحترافية */}
              <img src={item.thumbnail} alt="" className="w-10 h-10 object-contain bg-gray-50 rounded" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</span>
                <span className="text-xs text-blue-500 font-bold">${item.price}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )}
  </div>
);
    
     
        
    
  
}
