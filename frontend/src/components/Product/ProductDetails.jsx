import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { mens_kurta } from "../../assets/mens_kurta";
import HomeSectionCard from "../Home/HomeSectionCard";

const product = {
  name: "Men Shirts",
  price: "₹1999",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://assets.ajio.com/medias/sys_master/root/20240425/AitK/662a5c0a05ac7d77bb2ac316/-473Wx593H-466658768-red-MODEL.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://assets.ajio.com/medias/sys_master/root/20240425/AitK/662a5c0a05ac7d77bb2ac316/-473Wx593H-466658768-red-MODEL.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://assets.ajio.com/medias/sys_master/root/20240425/AitK/662a5c0a05ac7d77bb2ac316/-473Wx593H-466658768-red-MODEL.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://assets.ajio.com/medias/sys_master/root/20240425/AitK/662a5c0a05ac7d77bb2ac316/-473Wx593H-466658768-red-MODEL.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: false },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const navigate = useNavigate();

  return (
    <div className="bg-white lg:px-10">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link
                    to={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <Link
                to={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </Link>
            </li>
          </ol>
        </nav>
        <div className="grid grid-col-1 lg:grid-cols-2 pt-6 gap-y-10   ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded  ">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-[30rem] w-[30rem] object-cover object-center"
              />
            </div>
            <div className=" flex flex-wrap space-x-3 m-3 justify-center">
              {product.images.map((item, index) => (
                <div
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded max-w-[7rem] max-h-[7rem]"
                  key={index}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:col-span-1 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                Casual Solid Printed shirts
              </h1>
            </div>

            {/* Options */}
            <div className="mt-5 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="text-xl tracking-tight text-gray-900 flex flex-wrap items-center space-x-5 mt-2">
                <p className="font-semibold">Rs 200</p>
                <p className="opacity-50 line-through">Rs 299</p>
                <p className="text-green-500">5% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center space-x-3"
                    >
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={({ focus, checked }) =>
                            classNames(
                              color.selectedClass,
                              focus && checked ? "ring ring-offset-1" : "",
                              !focus && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <Link
                      to="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </Link>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ focus }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              focus ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ checked, focus }) => (
                            <>
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    focus ? "border" : "border-2",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 50 50"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    navigate("/Cart");
                  }}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-6 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-100 lg:pb-6 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-2">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-2">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rating and Reviews */}
        <div className="mx-10 my-20 border border-gray-200">
          <h1 className="font-semibold text-lg p-4 ml-5">Rating and Reviews</h1>

          <div className=" ">
            <ReviewCard />
            {/* <Grid container spacing={12}> */}
            {/* <Grid item xs={7}>
                <div className="space-y-4">
                  {[1, 1, 1, 1].map((item, reviews) => (
                    <ReviewCard key={reviews} />
                  ))}
                </div>
              </Grid> */}
            {/* <Grid item xs={5}>
                <h1 className="text-xl font-bold pb-2">Product Rating</h1>
                <div className="flex  items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60 ">1506 Ratings</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid container alignItems={"center"} gap={4}>
                    <Grid item xs={2}>
                      <p>Execellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={70}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={4}>
                    <Grid item xs={2}>
                      <p>VeryGood</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={60}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={4}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={4}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={35}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems={"center"} gap={4}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid> */}
            {/* </Grid> */}
          </div>
        </div>
        {/* Similar Product */}
        <div className="m-10 border rounded border-gray-200">
          <h1 className="p-4 ml-5 text-lg font-semibold">Similar Product</h1>
          <div className="flex flex-wrap p-8 mx-auto bg-white border-t border-gray-200 rounde items-center justify-center ">
            {mens_kurta.map((item, index) => (
              <HomeSectionCard product={item} Key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
