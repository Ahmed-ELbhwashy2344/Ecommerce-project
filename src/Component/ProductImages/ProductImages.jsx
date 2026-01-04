import React from "react";

export default function ProductImages({ product }) {
  return (
    <div className="w-full md:w-1/2 flex flex-wrap justify-center">
      <img
        className="w-[80%] mb-5"
        id="big-img"
        src={product.images[0]}
        alt=""
      />
      {product.images.map((image, index) => (
        <img
          className="w-1/4 cursor-pointer"
          src={image}
          key={index}
          onClick={() => (document.getElementById("big-img").src = image)}
        />
      ))}
    </div>
  );
}
