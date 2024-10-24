import React from "react";
import Slide1 from "../assets/1.png";
import Slide2 from "../assets/2.png";
import Slide3 from "../assets/3.png";

import ImageCarousel from "./ImageCarousel";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle
} from "recharts";

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

const data = [
  {
    name: "Jan",
    uv: 600,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 900,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 800,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 400,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 980,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    uv: 480,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    uv: 830,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Aug",
    uv: 400,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Sep",
    uv: 820,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Oct",
    uv: 630,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Nov",
    uv: 850,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Dec",
    uv: 600,
    pv: 4300,
    amt: 2100
  }
];

const TransactionChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <div className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white lg:col-span-2 p-2 rounded-sm border border-gray-200 dark:border-none flex flex-col h-[22rem]">
        <strong className="mb-3">Event Registrations per Month</strong>
        <div className="w-full flex-grow text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={32}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3 0 0" vertical="false" />
              <XAxis dataKey="name" color="#fff" />
              <YAxis />
              <Bar
                dataKey="uv"
                fill="#8576FF"
                activeBar={<Rectangle fill="red" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full h-64 md:h-96">
        <ImageCarousel autoSlide={true} autoSlideInterval={3000}>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </ImageCarousel>
      </div>
    </div>
  );
};

export default TransactionChart;
