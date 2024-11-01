import React from "react";
import MainCarousel from "./MainCarousel";
import SectionCarousel from "./SectionCarousel";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div className="mt-6">
      <div className="w-auto flex items-center justify-center ">
        <div className="w-[1470px] rounded">
          <MainCarousel />
        </div>
      </div>

      <div className="py-4 flex flex-col justify-center px-2 lg:px-2 ">
        <SectionCarousel />
        <SectionCarousel />
        <SectionCarousel />
        <SectionCarousel />
        <SectionCarousel />
        <SectionCarousel />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
