import { SetStateAction, useState } from "react";
import CropImage from "./CropImage";
import UploadImage from "./UploadImage";

interface PopupProps {
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ setShowPopup }) => {
  const [croppingImage, setCroppingImage] = useState(false);

  const handleExit = () => {
    setShowPopup(false);
    setCroppingImage(false);
  };

  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-neutral-950 bg-opacity-70">
      {!croppingImage ? (
        <UploadImage
          setShowPopup={handleExit}
          setCroppingImage={setCroppingImage}
        />
      ) : (
        <CropImage
          setShowPopup={handleExit}
          setCroppingImage={setCroppingImage}
        />
      )}
    </div>
  );
};

export default Popup;
