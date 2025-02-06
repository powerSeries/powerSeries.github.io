// Sections
import profile_photo from '../../assets/gojo.jfif';
import AboutMe from './about';
import Social from './social';

function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto_auto]">
      <div className="bg-gray-200 w-full flex-wrap h-auto grid grid-cols-2">
        <div className="border-2 text-black flex items-center justify-center">
          <h1 className="text-center padding text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Jose Sotolongo
          </h1>
        </div>
        <div className="border-2 text-black flex items-center justify-center">
          <img src={profile_photo} alt="ProfilePhoto" className='lg:py-16 lg:px-16 lg:w-full lg:h-auto md:py-8 md:px-8 sm:py-2 sm:px-2'/>
        </div>
      </div>

      <AboutMe/>

      <Social/>

    </div>
  );
}

export default Home;
