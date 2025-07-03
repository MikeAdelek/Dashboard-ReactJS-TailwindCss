import React from "react";

const SpeakerCard = ({ speaker, events, onSelect }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      onClick={onSelect}
    >
      <div className="relative">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-48 object-cover"
        />
        {speaker.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{speaker.name}</h3>
            <p className="text-gray-600 text-sm">{speaker.role}</p>
            <p className="text-gray-500 text-sm">{speaker.company}</p>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="ml-1 text-blue-600 font-medium">
              {speaker.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{speaker.bio}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Expertise:
          </h4>
          <div className="flex flex-wrap gap-1">
            {speaker.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {topic}
              </span>
            ))}
            {speaker.topics.length > 3 && (
              <span className="text-xs text-gray-500 px-1">
                +{speaker.topics.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Upcoming Events:
          </h4>
          {events.length > 0 ? (
            <div className="space-y-2">
              {events.slice(0, 2).map((event) => (
                <div key={event.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{event.name}</span>
                  <span className="text-gray-500">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </div>
              ))}
              {events.length > 2 && (
                <p className="text-xs text-blue-600">
                  +{events.length - 2} more events
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No upcoming events</p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex space-x-2">
            {speaker.contact.twitter && (
              <a
                href={`https://twitter.com/${speaker.contact.twitter}`}
                className="text-blue-400 hover:text-blue-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {speaker.contact.linkedin && (
              <a
                href={`https://linkedin.com/in/${speaker.contact.linkedin}`}
                className="text-blue-700 hover:text-blue-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            View Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
