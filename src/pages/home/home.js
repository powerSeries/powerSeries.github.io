// Sections
import profile_photo from '../../assets/gojo.jfif';
import AboutMe from './about';

function Home() {
  return (
    <div className="grid grid-rows-3 ">
      <div className="bg-gray-200 border-2 h-full w-full flex-wrap content-around grid grid-cols-2">
        <div className="border-2 text-black">
          <h1 className="text-5xl text-center padding">Jose Sotolongo</h1>
        </div>
        <div className="border-2 text-black">
          <img src={profile_photo} alt="ProfilePhoto"/>
        </div>
      </div>

      <AboutMe/>

      <div className="bg-gray-700 text-white h-full w-full">
        Home
      </div>

    </div>
  );
}

export default Home;
