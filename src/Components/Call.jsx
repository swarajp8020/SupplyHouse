import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const Call = () => {
  return (
    <div className="space-y-4 text-gray-800 bg-[#eef5fd] p-2 rounded-md shadow-md">
      {/* Call Section */}
      <div className="flex flex-col items-center p-2">
        <div className="flex items-center space-x-2">
          <IoCallOutline size={24} />
          <span className="font-semibold">Call</span>
          <a href="tel:888-551-7600" className="text-blue-500 hover:underline">
            888-551-7600
          </a>
        </div>
        <p className="text-sm text-gray-600 before:content-['•'] before:mr-2 before:text-2xl before:text-black">Available 8am</p>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center p-2">
        <div className="flex items-center space-x-2">
          <MdOutlineMessage size={24} />
          <span className="font-semibold">Text</span>
          <a href="sms:888-551-7600" className="text-blue-500 hover:underline">
            888-551-7600
          </a>
        </div>
        <p className="text-md text-gray-600 before:content-['•'] before:mr-2 before:text-2xl before:text-black">
          Available 8am
        </p>
      </div>

      <div className="flex flex-col items-center p-2">
        <div className="flex items-center space-x-2">
          <HiOutlineChatBubbleLeftRight size={24} />
          <span className="font-semibold">Live Chat</span>
          <a href="sms:888-551-7600" className="text-blue-500 hover:underline">
            888-551-7600
          </a>
        </div>
        <p className="text-md text-gray-600 before:content-['•'] before:mr-2 before:text-2xl before:text-black">Available 8am</p>
      </div>

      <div className="flex flex-col items-center p-2">
        <div className="flex items-center space-x-2">
          <MdOutlineMail size={24} />
          <span className="font-bold text-blue-600 text-xl">Email</span>
        </div>
        <p className="text-md text-gray-600 before:content-['•'] before:mr-2 before:text-3xl before:text-green-600">Response by Sun</p>
      </div>
    </div>
  );
};

export default Call;
