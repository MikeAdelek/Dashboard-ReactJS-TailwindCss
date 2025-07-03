import React, { useState } from "react";
import Video from "../assets/video.mp4";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample gallery items - replace with your actual images/videos
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "design",
      title: "Dashboard UI Design",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Modern dashboard interface design with dark theme"
    },
    {
      id: 2,
      type: "image",
      category: "web",
      title: "Web Application",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Responsive web application interface"
    },
    {
      id: 3,
      type: "video",
      category: "motion",
      title: "Animation Showcase",
      thumbnail:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "UI motion design principles demonstration"
    },
    {
      id: 4,
      type: "image",
      category: "design",
      title: "Mobile App Design",
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Mobile application interface design"
    },
    {
      id: 5,
      type: "image",
      category: "web",
      title: "E-commerce Platform",
      thumbnail:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Online shopping experience design"
    },
    {
      id: 6,
      type: "video",
      category: "motion",
      title: "Product Demo",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Product demonstration video"
    }
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Video Section */}
      <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-10"></div>
        <video className="w-full h-[500px] object-cover" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            EventHub
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center mb-8">
            Getting Ready for the Biggest Tech Conference of the Year
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-semibold">
            See you soon!
          </button>
        </div>
      </div>

      {/* Gallery Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeFilter === "all"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("design")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeFilter === "design"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeFilter === "web"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveFilter("motion")}
            className={`px-6 py-2 rounded-md font-medium ${
              activeFilter === "motion"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            Motion
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 rounded-full p-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span
                  className={`
                  px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.category === "design"
                      ? "bg-purple-100 text-purple-800"
                      : item.category === "web"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }
                `}
                >
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
