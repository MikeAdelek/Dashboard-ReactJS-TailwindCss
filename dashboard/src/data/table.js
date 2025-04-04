import { FiUsers, FiDollarSign } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { HiOutlineTrendingUp } from "react-icons/hi";

// Replace with actual real time data
export const statsData = [
  {
    icon: FiUsers,
    title: "Total Attendees",
    value: "350,421",
    change: "+45.45%"
  },
  { icon: SlCalender, title: "Total Events", value: "320", change: "+12.2%" },
  {
    icon: FiDollarSign,
    title: "Revenue",
    value: "$8,579,129",
    change: "+62.6%"
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Registrations",
    value: "283,254",
    change: "+10.1%"
  }
];

export const events = [
  {
    id: 1,
    title: "Cloud Innovation Summit",
    date: "2025-10-15",
    speaker: "Jane Doe",
    location: "San Francisco, CA",
    status: "Upcoming",
    registrations: 350,
    revenue: "$52,500"
  },
  {
    id: 2,
    title: "Blockchain Revolution Conference",
    date: "2025-11-05",
    speaker: "Dr. Peter Smith",
    location: "New York, NY",
    status: "Open",
    registrations: 275,
    revenue: "$41,250"
  },
  {
    id: 3,
    title: "AI in Healthcare Symposium",
    date: "2025-12-01",
    speaker: "Dr. Aisha Malik",
    location: "Chicago, IL",
    status: "Planning",
    registrations: 200,
    revenue: "$30,000"
  },
  {
    id: 4,
    title: "Future of Fintech Forum",
    date: "2025-10-25",
    speaker: "John Lee",
    location: "New York, NY",
    status: "Upcoming",
    registrations: 450,
    revenue: "$62,250"
  },
  {
    id: 5,
    title: "Data Analytics in Business",
    date: "2025-11-12",
    speaker: "Rachel Moore",
    location: "Chicago, IL",
    status: "Open",
    registrations: 280,
    revenue: "$30,750"
  },
  {
    id: 6,
    title: "Web3 Interface Workshop",
    date: "2025-10-10",
    speaker: "Kelvin Adams",
    location: "San Francisco, CA",
    status: "Planning",
    registrations: 735,
    revenue: "$77,829"
  },
  {
    id: 7,
    title: "Cybersecurity for Startups",
    date: "2025-11-19",
    speaker: "Emily Zhang",
    location: "New York, NY",
    status: "Upcoming",
    registrations: 375,
    revenue: "$42,550"
  },
  {
    id: 8,
    title: "Smart Cities Forum",
    date: "2025-10-18",
    speaker: "Dr. Maria Hernandez",
    location: "Washington, DC",
    status: "Completed",
    registrations: 975,
    revenue: "$100,820"
  }
];

export const activeEvents = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "June 15-16",
    attendees: 350,
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Innovation Summit",
    date: "July 20-22",
    attendees: 500,
    status: "Open"
  },
  {
    id: 3,
    title: "Startup Pitch Day",
    date: "August 5-6",
    attendees: 200,
    status: "Planning"
  },
  {
    id: 4,
    title: "Web3 Interface Workshop",
    date: "September 10-12",
    attendees: 790,
    status: "Planning"
  }
];
