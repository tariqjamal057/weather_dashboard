import PropTypes from 'prop-types';
import { FaTools, FaClock, FaRegSadTear } from "react-icons/fa";

const UnderConstruction = ({ botton_container }) => {
  return (
    <div className={`min-h-42 ${botton_container ? 'lg:min-h-[calc((100vh-145px)/2.15)]' : 'min-h-[80vh]'} col-span-12 bg-white rounded-lg flex flex-col justify-center items-center text-center ${botton_container ? "order-3" : ""} p-4`}>
      <h2 className="text-red-600 font-bold text-2xl mb-2 flex items-center">
        <FaTools className="mr-2" /> Under Construction
      </h2>
      <p className="text-gray-700 font-medium text-lg">
        <FaRegSadTear className="inline mr-2" /> This section is not implemented yet. We apologize for the inconvenience.
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <FaClock className="inline mr-2" /> Please check back later for updates!
        </p>
      </div>
    </div>
  );
};

UnderConstruction.propTypes = {
  botton_container: PropTypes.string.isRequired,
};

export default UnderConstruction;
