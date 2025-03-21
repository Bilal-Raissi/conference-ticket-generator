import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type TicketPreviewProps = {
  fullName: string;
  email: string;
  github: string;
  avatar: string | null;
};

const TicketPreview: React.FC<TicketPreviewProps> = ({ fullName, email, github, avatar }) => {
  return (
    <div className="max-w-5xl mx-auto p-1">
      <div className="flex justify-center mb-9">
        <img src="/logo-full.svg" alt="Logo" />
      </div>

      <h1 className="text-xx-large text-white font-bold text-center">
        Congrats,
        <span className="bg-gradient-to-r from-orange-800 to-white bg-clip-text text-transparent pl-2">
          {fullName}
        </span>!
      </h1>
      <h1 className="text-xx-large text-white font-bold text-center mb-5">Your ticket is ready.</h1>
      <p className="text-sm text-white text-center">We've emailed your ticket to</p>
      <p className="text-sm text-white text-center">
        <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">{email} </span>
        and will send updates in
      </p>
      <p className="text-sm text-white mb-9 text-center">the run up to the event.</p>

      <div className="bg-neutral-600 shadow-lg rounded-lg flex overflow-hidden">
        <div className="bg-neutral-600 p-10 flex flex-col items-center justify-center relative w-1/4">
          <h2 className="text-xl text-white writing-mode-vertical-rl rotate-270">#01234</h2>
          <span className="absolute top-0 right-[-13px] w-6 h-6 bg-gradient-to-br from-gray-900 to-purple-900 rounded-full"></span>
          <span className="absolute bottom-0 right-[-13px] w-6 h-6 bg-gradient-to-br from-gray-900 to-purple-900 rounded-full"></span>
        </div>
        <div className="p-6 border-l-2 border-dashed border-gray-400 flex-1">
          <img src="/logo-full.svg" className="w-40 mb-1" alt="Logo" />
          <p className="text-sm text-white mb-5 ml-9">June 30, 2025 / Rabat</p>

          <div className="flex items-center mb-4">
            <img src={avatar || ""} className="w-10 h-10 rounded-lg mr-4" alt="Logo" />
            <div>
              <h2 className="text-xl text-white mb-1">{fullName}</h2>
              <p className="text-lg text-white"><FontAwesomeIcon icon={faGithub} /> {github}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
