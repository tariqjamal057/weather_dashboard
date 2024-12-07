import { FaTools, FaClock, FaRegSadTear } from "react-icons/fa";

const UnderConstruction = () => {
  return (
    <div
      className={`min-h-42 min-h-[80vh]  bg-white rounded-lg flex flex-col justify-center items-center text-center col-span-12 p-4`}
    >
      <h2 className="text-red-600 font-bold text-2xl mb-2 flex items-center">
        <FaTools className="mr-2" /> Under Construction
      </h2>
      <p className="text-gray-700 font-medium text-lg">
        <FaRegSadTear className="inline mr-2" /> This section is not implemented
        yet. We apologize for the inconvenience.
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <FaClock className="inline mr-2" /> Please check back later for
          updates!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
