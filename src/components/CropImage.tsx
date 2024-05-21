import exitMark from "../assets/img/x-mark.svg";
import cropImage from "../assets/img/crop-image.svg";
import { SetStateAction } from "react";

interface CropImageProps {
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
  setCroppingImage: React.Dispatch<SetStateAction<boolean>>;
}

const CropImage: React.FC<CropImageProps> = ({
  setShowPopup,
  setCroppingImage,
}) => {
  return (
    <div className="flex h-[458px] w-[343px] flex-col items-center justify-around rounded-md  bg-white p-2 shadow">
      <div className="flex w-11/12 items-center justify-between">
        <p className="text-primary-dark text-lg font-semibold">
          Crop your picture
        </p>
        <img
          src={exitMark}
          className="size-5"
          onClick={() => setShowPopup(false)}
          alt="Close popup"
        />
      </div>
      <div className="flex h-[290px] w-11/12 items-center justify-center bg-black">
        <div className="fixed top-1/3 h-[182px] w-[193px] rounded-full bg-white opacity-20 shadow" />
        <img src={cropImage} />
      </div>
      <div className="flex w-11/12 items-center justify-between">
        <button
          className="text-primary-dark h-11 w-[141.5px] rounded bg-white font-normal shadow"
          onClick={() => setCroppingImage(false)}
        >
          Cancel
        </button>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-indigo-dark text-primary-lightest h-11 w-[141.5px] rounded font-normal shadow"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CropImage;
