import imgMission from "../Util/missionimg.jpg";
import { Link } from "react-router-dom";

const Mission = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16"> 
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 text-blue-900 text-center"> 
        Our Mission
      </h1>
      <div className="flex flex-col-reverse md:flex-row bg-blue-100  md:h-[300px] w-full rounded-lg"> 
        <div className="p-4 md:p-8 lg:p-12 w-full md:w-1/2"> 
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 text-center md:text-left">
            Empowering Health, Enhancing Lives.
            <br />
            Innovative Care for a Healthier Tomorrow.
          </p>
          <button className="mt-4 md:mt-8 lg:mt-12 w-full md:w-auto px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors duration-300" onClick={handleClick}> 
            <Link to={'/about-us'} >Our Mission</Link>
          </button>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden flex justify-center"> 
          <img
            src={imgMission}
            alt="imgMission"
            className=" pt-3 pb-3 h-[200px] md:h-[250px] lg:h-[300px] w-auto rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;