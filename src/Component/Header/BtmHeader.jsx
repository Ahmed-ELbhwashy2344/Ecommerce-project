import React, { useCallback, useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { data, Link, NavLink, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

function BtmHeader() {
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const location = useLocation();
  const [categoery, setCategoery] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setShowCategories(false);
  }, [location]);

  const cat = useCallback(async () => {
    const results = await axios.get(
      "https://dummyjson.com/products/categories"
    );

    setCategoery(results.data);
  }, []);

  useEffect(() => {
    cat();
  }, []);

  return (
    <div className="relative"> {/* أضفنا relative هنا */}
      <nav className="bg-blue-400 px-5">
        <div className="container mx-auto flex items-center justify-between relative">
          
          {/* Browse Category Section */}
          <div className="relative group"> {/* Container للتصنيفات */}
            <ul
              onClick={() => setShowCategories(!showCategories)}
              className="cursor-pointer flex items-center gap-x-2 py-3"
            >
              <li className="text-white text-lg md:text-2xl font-medium">Browse Category</li>
              <li className={`text-white text-3xl transition-transform duration-300 ${showCategories ? "" : "-rotate-90"}`}>
                <MdArrowDropDown />
              </li>
            </ul>

            {/* قائمة التصنيفات - تم تحسين التموضع */}
            <ul
              className={`z-[100] absolute top-full left-0 w-64 bg-white shadow-2xl border border-black/10 overflow-auto transition-all duration-300 ${
                showCategories ? "opacity-100 visible max-h-80" : "opacity-0 invisible max-h-0"
              }`}
            >
              {categoery.map((cat, index) => (
                <Link
                  className="text-lg font-bold text-gray-500 hover:text-black hover:bg-gray-50 block border-b border-gray-200 px-4 py-2 transition-colors"
                  key={index}
                  to={`Category/${cat.slug}`}
                  onClick={() => setShowCategories(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-x-8">
            <ul className="flex items-center gap-x-2">
              {NavLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-500 ${
                        isActive ? "bg-blue-600" : ""
                      }`
                    }
                    to={item.link}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-x-5 text-white text-2xl border-l border-blue-300 pl-5">
              <li><Link title="Sign In" to="/"><PiSignInBold /></Link></li>
              <li><Link title="Register" to="/"><FaUserPlus /></Link></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl text-white p-2"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <BsList />}
          </button>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl z-[90] border-t border-gray-100">
              <div className="flex flex-col p-4 space-y-4">
                {NavLinks.map((item) => (
                  <Link 
                    className="text-gray-800 font-bold text-lg hover:text-blue-500 border-b border-gray-50 pb-2" 
                    to={item.link} 
                    key={item.title} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="flex gap-x-6 pt-2 text-blue-900  text-2xl">
                   <Link to="/"><PiSignInBold /></Link>
                   <Link to="/"><FaUserPlus /></Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
}

export default BtmHeader;

//className={location.pathname === item.link ? 'active bg-blue-600 py-2 -px-2 ' : ''}
