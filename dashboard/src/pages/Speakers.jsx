import React, { useState } from "react";
import SpeakerCard from "../Components/SpeakerCard";
const Speakers = () => {
  const [speakers, setSpeakers] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "AI Research Scientist",
      company: "TechInnovate Labs",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Leading researcher in artificial intelligence with over 15 years of experience in machine learning algorithms.",
      topics: [
        "Artificial Intelligence",
        "Machine Learning",
        "Neural Networks"
      ],
      events: ["Tech Summit 2023", "AI Conference"],
      rating: 4.9,
      featured: true,
      contact: {
        email: "sarah.johnson@example.com",
        twitter: "@sarahai",
        linkedin: "sarahjohnson"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Design Director",
      company: "DesignForward",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning UX designer specializing in creating intuitive user experiences for enterprise applications.",
      topics: ["UX Design", "Design Systems", "User Research"],
      events: ["Design Week", "UX Conference"],
      rating: 4.7,
      featured: true,
      contact: {
        email: "michael.chen@example.com",
        twitter: "@mikedesigns",
        linkedin: "michaelchen"
      }
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      role: "Cybersecurity Expert",
      company: "SecureNet Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Cybersecurity specialist with expertise in threat detection and prevention for enterprise networks.",
      topics: ["Cybersecurity", "Ethical Hacking", "Network Security"],
      events: ["Security Summit", "CyberDefense Conference"],
      rating: 4.8,
      featured: false,
      contact: {
        email: "james.wilson@example.com",
        twitter: "@securityjames",
        linkedin: "jameswilson"
      }
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Product Management Lead",
      company: "InnovateTech",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Product management expert specializing in agile methodologies and product strategy.",
      topics: [
        "Product Management",
        "Agile Development",
        "Go-to-Market Strategy"
      ],
      events: ["Product Summit", "Agile Conference"],
      rating: 4.6,
      featured: false,
      contact: {
        email: "emily.rodriguez@example.com",
        twitter: "@emilyproduct",
        linkedin: "emilyrodriguez"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Blockchain Developer",
      company: "ChainInnovate",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Blockchain expert with experience developing decentralized applications and smart contracts.",
      topics: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
      events: ["Blockchain Summit", "Web3 Conference"],
      rating: 4.5,
      featured: true,
      contact: {
        email: "david.kim@example.com",
        twitter: "@davidblockchain",
        linkedin: "davidkim"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Data Science Director",
      company: "DataInsights",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Data science leader with expertise in predictive analytics and big data solutions.",
      topics: ["Data Science", "Big Data", "Predictive Analytics"],
      events: ["Data Summit", "Analytics Conference"],
      rating: 4.8,
      featured: false,
      contact: {
        email: "lisa.thompson@example.com",
        twitter: "@lisadata",
        linkedin: "lisathompson"
      }
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Summit 2023",
      date: "2023-11-15",
      location: "San Francisco, CA",
      speakers: [1, 5]
    },
    {
      id: 2,
      name: "Design Week",
      date: "2023-10-20",
      location: "New York, NY",
      speakers: [2]
    },
    {
      id: 3,
      name: "Security Summit",
      date: "2023-12-05",
      location: "Chicago, IL",
      speakers: [3]
    },
    {
      id: 4,
      name: "Product Summit",
      date: "2023-09-28",
      location: "Austin, TX",
      speakers: [4]
    },
    {
      id: 5,
      name: "Blockchain Summit",
      date: "2023-11-10",
      location: "Miami, FL",
      speakers: [5]
    },
    {
      id: 6,
      name: "Data Summit",
      date: "2023-10-15",
      location: "Seattle, WA",
      speakers: [6, 1]
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter speakers based on active filter and search term
  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "featured" && speaker.featured) ||
      speaker.topics.includes(activeFilter);

    const matchesSearch =
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  // Get events for a specific speaker
  const getSpeakerEvents = (speakerId) => {
    return events.filter((event) => event.speakers.includes(speakerId));
  };

  // Handle speaker selection
  const handleSpeakerSelect = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  // Topic filters
  const topicFilters = [
    "all",
    "featured",
    "Artificial Intelligence",
    "UX Design",
    "Cybersecurity",
    "Product Management",
    "Blockchain",
    "Data Science"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Event Speakers
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Browse our roster of industry-leading speakers available for your next
          event. Filter by expertise or search for specific qualifications.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search speakers..."
            className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          {topicFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter === "all"
                ? "All Speakers"
                : filter === "featured"
                ? "Featured"
                : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            speaker={speaker}
            events={getSpeakerEvents(speaker.id)}
            onSelect={() => handleSpeakerSelect(speaker)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredSpeakers.length === 0 && (
        <div className="text-center py-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No speakers found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Speaker Detail Modal */}
      {isModalOpen && selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedSpeaker.name}
                    </h2>
                    <p className="text-gray-600">
                      {selectedSpeaker.role} at {selectedSpeaker.company}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Biography</h3>
                <p className="text-gray-700">{selectedSpeaker.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSpeaker.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
                {getSpeakerEvents(selectedSpeaker.id).length > 0 ? (
                  <div className="space-y-3">
                    {getSpeakerEvents(selectedSpeaker.id).map((event) => (
                      <div key={event.id} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{event.name}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric"
                            })}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {event.location}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
