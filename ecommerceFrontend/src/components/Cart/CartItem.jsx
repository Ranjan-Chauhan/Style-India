import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
// import { Button } from "@mui/material";

function CartItem() {
  const [itemUnit, setItemUnit] = useState(1);

  const handleRemove = () => {
    if (itemUnit > 1) {
      setItemUnit(itemUnit - 1);
    }
  };

  const handleAdd = () => {
    setItemUnit(itemUnit + 1);
  };

  return (
    <div className="lg:mt-12 mr-5 shadow-md border rounded-md">
      <div className="flex m-3">
        <div className="w-[5rem] h-[6rem] lg:w-[8rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-cover object-top rounded-lg"
            src="https://clothsvilla.com/cdn/shop/products/Exclusive_Designer_Navy_Blue_Traditional_Ethnic_Wear_Lehenga_Choli_153.2_1024x1024.jpg?v=1694846200"
            alt=""
          />
        </div>

        <div className="space-y-3">
          <div className="lg:mt-0 ml-5">
            <p className="font-semibold">Ethinic Wear Lahenga</p>
            <p className="opacity-70">Size: L , white</p>
            <p className="opacity-70">Seller: Nayaka</p>

            <div className="flex space-x-4 items-center text-gray-900 pt-2">
              <p className="font-semibold ">₹ 3999</p>
              <p className="opacity-60 ">₹ 5000</p>
              <p className="text-green-500 line-through font-semibold ">
                20% off
              </p>
            </div>
          </div>

          <div className="w-32">
            <div className="flex justify-center  items-center space-x-1.5 ">
              <button onClick={handleRemove}>
                <RemoveCircleOutlineIcon
                  sx={{ fontSize: { xs: 12, md: 16, xl: 20 }, color: "red" }}
                />
              </button>
              <span className="py-0.9 px-5 border text-sm rounded-sm mt-1">
                {itemUnit}
              </span>
              <button onClick={handleAdd}>
                <ControlPointIcon
                  sx={{
                    fontSize: { xs: 12, md: 16, xl: 20 },
                    color: "RGB(145 85 253) ",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:ml-[450px]">
          <button className="text-red-600 text-sm font-semibold text-center hover:text-stone-100 hover:bg-red-500 py-1 px-2 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
