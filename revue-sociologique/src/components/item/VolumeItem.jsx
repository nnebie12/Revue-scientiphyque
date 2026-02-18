import { FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const VolumeItem = ({ vol, date, id }) => {
  return (
    <Link
      to={`/volumes/${id}`}
      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all group border border-transparent hover:border-blue-100"
    >
      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <FileText size={24} />
      </div>
      <div className="flex-1">
        <p className="font-bold text-gray-900 group-hover:text-blue-600 leading-tight">
          {vol}
        </p>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Calendar size={12} className="mr-1" />
          <span>Publié le {new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};
export { VolumeItem };