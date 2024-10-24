import React from "react";
import Slide1 from "../assets/1.png";
import Slide2 from "../assets/2.png";
import Slide3 from "../assets/3.png";

import ImageCarousel from "./ImageCarousel";

export const slides = [
  {
    id: 1,
    title: "Latest News & Update",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    image: Slide1
  },
  {
    id: 2,
    title: "Latest News & Update",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    image: Slide2
  },
  {
    id: 3,
    title: "Latest News & Update",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    image: Slide3
  }
];
export default function ParentComponent() {
  return (
    <div className="w-full h-64 md:h-96">
      <ImageCarousel autoSlide={true} autoSlideInterval={3000}>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </ImageCarousel>
    </div>
  );
}
