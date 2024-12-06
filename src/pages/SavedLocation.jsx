import useDocumentTitle from "../components/layouts/useDocumentTitle";
import UnderConstruction from "../components/UnderConstruction";

const SavedLocation = () => {
  useDocumentTitle("Weather App - Saved Locations");
  return (
    <>
      <UnderConstruction botton_container={false} />
    </>
  );
};

export default SavedLocation;
