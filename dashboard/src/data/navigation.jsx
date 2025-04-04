import { RiUserVoiceLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

export const speaker = [
  { name: "Jane Doe", image: "/api/placeholder/32/32" },
  { name: "Dr. Peter Smith", image: "/api/placeholder/32/32" },
  { name: "Dr. Aisha Malik", image: "/api/placeholder/32/32" },
  { name: "John Lee", image: "/api/placeholder/32/32" },
  { name: "Rachel Moore", image: "/api/placeholder/32/32" },
  { name: "Kelvin Adams", image: "/api/placeholder/32/32" },
  { name: "Emily Zhang", image: "/api/placeholder/32/32" },
  { name: "Dr. Maria Hernandez", image: "/api/placeholder/32/32" }
];

export const sidebarItems = [
  {
    key: "Home",
    label: "Home",
    path: "/",
    icon: <HiOutlineHome />
  },
  {
    key: "Event",
    label: "Event",
    path: "/events",
    icon: <MdEventNote />
  },
  {
    key: "Speakers",
    label: "Speakers",
    path: "/speakers",
    icon: <RiUserVoiceLine />
  },
  {
    key: "News",
    label: "News",
    path: "/news",
    icon: <FaNewspaper />
  },
  {
    key: "Gallery",
    label: "Gallery",
    path: "/gallery",
    icon: <GrGallery />
  },
  {
    key: "Settings",
    label: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline />
  }
];
