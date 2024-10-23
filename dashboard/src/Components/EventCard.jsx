import React from "react";
import { FiUsers } from "react-icons/fi";
import { Edit, Trash2, CheckSquare, Users } from "lucide-react";
import { eventCard } from "../constants/table";
import { speaker } from "../constants/navigation";

const EventCard = ({ attendees = 300, onEdit, onDelete, onComplete }) => {
  return (
    <div className="bg-white dark:bg-[#6A6676] transition-colors rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6 w-full max-w-[95%] mx-auto sm:max-w-2xl">
        {/* Event Header */}
        {eventCard.map(({ Event, Date, eventDescription }, index) => (
          <div className="mb-4" key={index}>
            {/* <div key={index}></div> */}
            <h2 className="dark:text-white text-2xl sm:text-2xl font-bold text-gray-800">
              {Event}
            </h2>
            <p className="dark:text-white text-sm text-gray-500 mt-1">{Date}</p>
            {/* Event Description */}
            <p className="dark:text-white text-sm sm:text-base text-gray-600 mb-6">
              {eventDescription}
            </p>
          </div>
        ))}

        {/* Speakers Section */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-2">
            <div className="flex -space-x-4">
              {speaker.map((speak, index) => (
                <div
                  key={index}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <img
                    src={speak.image}
                    alt={speak.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-600 text-sm sm:text-sm font-medium">
                    {speak.name[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="dark:text-white text-sm font-medium text-gray-700">
              Guest Speakers
            </p>
            <p className="dark:text-white text-xs sm:text-sm text-gray-500">
              {speaker.map((s) => s.name).join(", ")}
            </p>
          </div>
        </div>

        {/* Attendees Count */}
        <div className="flex items-center justify-center mb-6">
          <FiUsers className="dark:text-white w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2" />
          <span className="dark:text-white text-sm text-gray-600">
            {attendees} Attendees
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="w-full sm:w-auto px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>

          <div className="flex flex-col sm:flex-row sm:gap-2 gap-3">
            {/* Delete Button */}
            <button
              onClick={onDelete}
              className="w-full sm:w-auto px-4 py-2 flex items-center gap-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>

            {/* Mark as Completed Button */}
            <button
              onClick={onComplete}
              className="w-full sm:w-auto px-4 py-2 flex items-center gap-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <CheckSquare className="w-4 h-4" />
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
