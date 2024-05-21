import "./App.css";
import profileSVG from "./assets/img/avatar.jpg";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-indigo-dark tablet:px-2 flex h-5/6 w-11/12 flex-col items-center justify-between">
        {/*  */}

        {/* title */}
        <div className="flex h-[76px] w-full flex-col justify-around ">
          <p className="text-primary-dark text-xl font-semibold tracking-wide">
            Manage Your Account
          </p>
          <p className="text-primary text-sm">
            Update your account details below for a tailored experience on our
            platform.
          </p>
        </div>

        {/* content */}
        <div className="flex h-5/6 w-full flex-col justify-between">
          {/*  */}

          {/* form group */}
          <div className="flex h-5/6 flex-col justify-between">
            <div className="flex h-[104px] justify-between">
              <img className="h-full rounded-full" src={profileSVG} />
              <div className="flex w-[223px] flex-col justify-around py-4">
                <button className="text-primary-medium h-9 w-32 rounded text-sm font-medium  tracking-wide shadow">
                  Change avatar
                </button>
                <p className="text-primary text-xs">
                  At least 800x800 px. JPG or PNG only.
                </p>
              </div>
            </div>
            <div className="flex h-16  w-full items-center justify-between">
              <div className="flex w-[150px] flex-col">
                <label className="text-primary-medium h-5  text-sm font-medium">
                  First Name
                </label>
                <input className="bg-input-field h-10 p-3" placeholder="John" />
              </div>
              <div className="flex w-[150px] flex-col">
                <label className="text-primary-medium h-5  text-sm font-medium">
                  Last Name
                </label>
                <input
                  className="bg-input-field h-10 p-3"
                  placeholder="Appleseed"
                />
              </div>
            </div>
            <div className="flex h-16 flex-col">
              <label className="text-primary-medium h-5  text-sm font-medium">
                Email
              </label>
              <input
                className="bg-input-field h-10 p-3"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex h-24 flex-col justify-between">
              <label className="text-primary-medium h-5  text-sm font-medium">
                Username
              </label>
              <input
                className="bg-input-field h-10 p-3"
                placeholder="johnappleseed"
              />
              <span className="text-primary text-sm">
                Allows others to find and interact with you easily
              </span>
            </div>
          </div>

          {/* footer-controls */}
          <div className="flex h-20 items-center justify-end">
            <button className="bg-input-field text-primary-light h-12 w-44 rounded-md shadow">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
