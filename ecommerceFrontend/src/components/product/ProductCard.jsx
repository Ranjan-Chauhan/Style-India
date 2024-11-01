import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[14rem] m-5 hover:shadow-2xl transition-all cursor-pointer rounded "
    >
      <div className="h-[17rem] w-[14rem] rounded">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="text-black font-semibold">{product.brand}</p>
          <p className="text-sm text-gray-900">{product.title}</p>
        </div>

        <div className="flex items-center space-x-4">
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
