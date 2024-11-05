// import { Avatar, Box, Grid, Rating } from "@mui/material";

// function ReviewCard() {
//   return (
//     <div>
//       <Grid container spacing={1} gap={0}>
//         <Grid item xs={1}>
//           <Box>
//             <Avatar
//               className="text-white"
//               sx={{ width: 28, height: 28, bgcolor: "#9155fd" }}
//             ></Avatar>
//           </Box>
//         </Grid>

//         <Grid item xs={9}>
//           <div className="space-y-2">
//             <div>
//               <p className="font-semibold text-lg ">Ranjan</p>
//               <p className="opacity-75">May 20, 2024</p>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
//           </div>
//           <p>Nice Product, Must Buy </p>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default ReviewCard;
import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "Emily Selman",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      rating: 5,
      comment:
        "This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.",
    },
    {
      name: "Hector Gibbons",
      image:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
      rating: 5,
      comment:
        "Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!",
    },
    {
      name: "Mark Edwards",
      image:
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      rating: 4,
      comment:
        "I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.",
    },
  ];

  return (
    <div className="flex space-x-16 p-8 mx-auto bg-white border-t border-gray-200 rounded">
      {/* Review Summary Section */}
      <div className="mb-8 py-3">
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>
        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-500">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <span key={index}>★</span>
              ))}
          </div>
          <p className="ml-2 text-gray-600">Based on 1624 reviews</p>
        </div>

        {/* Star Rating Breakdown */}
        <div className="mt-4 space-y-2">
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={index} className="flex items-center">
              <span className="flex items-center mr-2 text-gray-600">
                {rating} <span className="ml-1">★</span>
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                <div
                  className={`h-2 flex rounded-full ${
                    rating === 5
                      ? "bg-yellow-500 w-3/5"
                      : rating === 4
                      ? "bg-yellow-500 w-1/5"
                      : rating === 3
                      ? "bg-yellow-500 w-1/12"
                      : rating === 2
                      ? "bg-yellow-500 w-1/8"
                      : "bg-yellow-500 w-1/10"
                  }`}
                ></div>
              </div>
              <span className="text-gray-600">
                {[63, 10, 6, 12, 9][index]}%
              </span>
            </div>
          ))}
        </div>

        {/* Write a Review Button */}
        <div className="mt-6">
          <p className="font-semibold">Share your thoughts</p>
          <p className="text-sm text-gray-600">
            If you've used this product, share your thoughts with other
            customers
          </p>
          <button className="mt-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
            Write a review
          </button>
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div className="space-y-6 p-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="items-center">
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex items-center text-yellow-500">
                  {Array(review.rating)
                    .fill("")
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
              </div>
              <p className="text-gray-600 mt-1">{review.comment}</p>
              {index !== reviews.length - 1 && <hr className="my-4" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
