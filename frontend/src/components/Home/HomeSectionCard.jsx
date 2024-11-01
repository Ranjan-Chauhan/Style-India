import React from "react";
import { useNavigate } from "react-router-dom";

function HomeSectionCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="curser-pointer flex flex-col items-center justify-center rounded hover:shadow-2xl overflow-hidden w-[14rem] m-3 "
    >
      <div className="h-[17rem] w-[14rem] bg-gray-100">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="m-2">
        <h3 className="text-base font-semibold mt-1.5 text-black">
          {product.brand.toUpperCase()}
        </h3>
        <p className="my-1 text-sm text-gray-900">{product.title}</p>
      </div>

      {/* <div className="h-[16rem] w-[13rem] mt-5  ">
      <img
          className="object-cover object-top w-full h-full item rounded-2xl"
          src="https://static.zara.net/assets/public/8c98/ce34/3d75476cbd85/f5c2db8cbd39/06917420712-a1/06917420712-a1.jpg?ts=1706098659363&w=824"
          alt=""
        />
      </div> */}
    </div>
  );
}

export default HomeSectionCard;
