import { CiDark } from "react-icons/ci";
import { RiUserVoiceLine } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineHome, HiOutlineDocumentReport } from "react-icons/hi";
import { MdEventNote, MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const speaker = [
  { name: "Jane Doe", image: "/api/placeholder/32/32" },
  { name: "Dr. Peter Smith", image: "/api/placeholder/32/32" },
  { name: "Dr. Aisha Malik", image: "/api/placeholder/32/32" }
];

export const mobileNav = [
  {
    icon: <HiOutlineHome size={20} />,
    label: "Home",
    path: "/",
    iconType: "HiOutlineHome"
  },
  {
    icon: <MdEventNote size={20} />,
    label: "Event",
    path: "/",
    iconType: "MdEventNote"
  },
  {
    icon: <RiUserVoiceLine size={20} />,
    label: "Speakers",
    path: "/",
    iconType: "RiUserVoiceLine"
  },
  {
    icon: <HiOutlineDocumentReport size={20} />,
    label: "Report",
    path: "/",
    iconType: "HiOutlineDocumentReport"
  },
  {
    icon: <HiOutlineUserCircle size={20} />,
    label: "Profile",
    path: "/",
    iconType: "HiOutlineUserCircle"
  }
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
    path: "/event",
    icon: <MdEventNote />
  },
  {
    key: "Speakers",
    label: "Speakers",
    path: "/speakers",
    icon: <RiUserVoiceLine />
  },
  {
    key: "Report",
    label: "Report",
    path: "/report",
    icon: <HiOutlineDocumentReport />
  },
  {
    key: "Notifications",
    label: "Notifications",
    path: "/notifications",
    alert: 3,
    icon: <IoMdNotificationsOutline />
  },
  {
    key: "Messages",
    label: "Messages",
    path: "/messages",
    icon: <LuMessagesSquare />
  },
  {
    key: "Settings",
    label: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline />
  },
  {
    key: "Collapse",
    label: "Collapse",
    path: "/collapse",
    icon: <MdKeyboardDoubleArrowLeft />
  },
  {
    key: "DarkMode",
    label: "Dark Mode",
    path: "/darkmode",
    icon: <CiDark />
  }
];
