import { SetStateAction } from "react";
import uploadSVG from "../assets/img/uploadVector.svg";
import exitMark from "../assets/img/x-mark.svg";

interface PopupProps {
  setUploadFiles: React.Dispatch<SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ setUploadFiles }) => {
  const handleUpload = () => {};
  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-neutral-950 bg-opacity-70 ">
      <div className="desktop:w-5/12 desktop:h-[344px] flex h-80 w-11/12 flex-col items-center justify-around rounded-md bg-white shadow">
        <div className="desktop:w-[528px] flex w-10/12 flex-col items-start">
          <div className="flex w-full items-center justify-between">
            <p className="text-primary-dark text-xl font-medium tracking-wide">
              Upload image(s)
            </p>
            <img
              onClick={() => setUploadFiles(false)}
              className="h-5 w-5 cursor-pointer"
              src={exitMark}
              alt="Close"
            />
          </div>
          <p className="text-primary mt-2">You may upload up to 5 images</p>
        </div>
        <div className="flex h-48 w-11/12 flex-col items-center justify-around rounded bg-neutral-200 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <img
              className="h-5 w-6"
              src={uploadSVG}
              alt="Upload"
              onClick={handleUpload}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-black">
              Click or drag and drop to upload
            </p>
            <p className="text-primary text-sm">PNG, or JPG(Max 5MB)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
