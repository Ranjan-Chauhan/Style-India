// import React, { useRef } from "react";
// import HomeSectionCard from "./HomeSectionCard";
// import { mens_kurta } from "../../assets/mens_kurta";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// function SectionCarousel() {
//   const sliderRef = useRef(null);

//   // const responsive = {
//   //   //   0: { items: 1 },
//   //   //   720: { items: 3 },
//   //   //   1024: { items: 4 },
//   //   //   1440: { items: 5.5 },
//   //   // };

//   const slidePrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const slideNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const items = mens_kurta
//     .slice(0, 10)
//     .map((item, index) => <HomeSectionCard key={index} product={item} />);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="px-3 w-auto relative">
//       <div className="p-4">
//         <Slider ref={sliderRef} {...settings}>
//           {items}
//         </Slider>

//         <button
//           onClick={slidePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//         >
//           <NavigateBeforeIcon sx={{ fontSize: 24, color: "black" }} />
//         </button>

//         <button
//           onClick={slideNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
//         >
//           <NavigateNextIcon sx={{ fontSize: 24, color: "black" }} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SectionCarousel;
import React, { useRef, useState } from "react";
import HomeSectionCard from "./HomeSectionCard";
import { mens_kurta } from "../../assets/mens_kurta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function SectionCarousel() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = mens_kurta
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="px-3 w-auto relative">
      <div className="p-4">
        <Slider ref={sliderRef} {...settings}>
          {items}
        </Slider>

        {/* Conditionally render the left button */}
        {currentSlide !== 0 && (
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <NavigateBeforeIcon sx={{ fontSize: 24, color: "black" }} />
          </button>
        )}

        {/* Conditionally render the right button */}
        {currentSlide < items.length - 6 && (
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <NavigateNextIcon sx={{ fontSize: 24, color: "black" }} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SectionCarousel;
