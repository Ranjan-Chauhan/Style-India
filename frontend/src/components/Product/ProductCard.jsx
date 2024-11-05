import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[14rem] m-5 hover:shadow-2xl transition-all cursor-pointer rounded border"
    >
      <div className="h-[17rem] w-[14rem]">
        <img
          className="h-full w-full object-cover object-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart p-3.5">
        <p className="text-black font-medium">{product.brand}</p>
        <p className="text-sm text-gray-900 opacity-95 focus:outline-none">
          {product.title}
        </p>

        <div className="flex items-center space-x-4 pt-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-70 text-sm">{product.price}</p>
          <p className="text-green-500 text-sm font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
