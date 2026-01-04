import Slider from "../../Component/Slider/Slider";
import Products from "../../Component/Products/Products";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const categories = [
  "laptops",
  "mens-watches",
  "motorcycle",
  "smartphones",
  "tablets",
  "vehicle",
  "tops",
];

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      const results = await Promise.all(
        categories.map(async (category) => {
          const response = await axios.get(
            `https://dummyjson.com/products/category/${category}`
          );
          return { [category]: response.data.products };
        })
      );
      const productsData = Object.assign({}, ...results);
      setProducts(productsData);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className=" container mx-auto ">
      <Slider />

      {loading ? (
        <p>wait</p>
      ) : (
        categories.map((category, index) => (
          <Products key={index} data={products[category]} category={category} />
          
        ))
      )}
    </div>
  );
}

export default Home;
// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const results = await Promise.all(
//         categories.map(async (category) => {
//           const res = await fetch(
//             `https://dummyjson.com/products/category/${category}`
//           );
//           console.log(res);
//           const data = await res.json();
//           return { [category]: data.products };
//         })
//       );

//       const productsData = Object.assign({}, ...results);
//       setProducts(productsData);
//     } catch (error) {
//       console.error("Error Fetching", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, []);
