import React from "react";
import { FileText } from "lucide-react";


const VolumeItem = ({ vol, date }) => {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
    >
      <FileText className="text-blue-600 flex-shrink-0" size={20} />
      <div className="flex-1">
        <p className="font-medium text-gray-900 group-hover:text-blue-600">{vol}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </a>
  );
};
export { VolumeItem };