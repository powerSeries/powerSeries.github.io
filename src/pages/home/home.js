// Sections
import profile_photo from '../../assets/gojo.jfif';
import AboutMe from './about';
import Social from './social';

function Home() {
  return (
    <div className="grid grid-rows-2">
      <div className="bg-gray-200 h-full w-full flex-wrap content-around grid grid-cols-2">
        <div className="border-2 text-black flex items-center justify-center">
          <h1 className="text-center padding text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Jose Sotolongo</h1>
        </div>
        <div className="border-2 text-black">
          <img src={profile_photo} alt="ProfilePhoto" className='w-full h-auto'/>
        </div>
      </div>

      <AboutMe/>

      <Social/>

    </div>
  );
}

export default Home;
