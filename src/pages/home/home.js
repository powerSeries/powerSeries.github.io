// Sections
import profile_photo from '../../assets/gojo.jfif';

function Home() {
  return (
    <div className="grid grid-rows-3">
      <div className="bg-gray-200 border-2 h-fit w-full flex-wrap content-around grid grid-cols-2">
        <div className="border-2 text-black">
          <h1 className="text-5xl text-center padding">Jose Sotolongo</h1>
        </div>
        <div className="border-2 text-black">
          <img src={profile_photo} alt="ProfilePhoto"/>
        </div>
      </div>

      <div className="bg-gray-500 border-2 h-full w-full">
        <div className='w-full'>
          <h1 className='text-5xl'>About Me!</h1>
        </div>
        <div className='w-1/2 text-start'>
          <p className='text-white text-justify'>
            My name is Jose Sotolongo, I currently work as a software engineer for Dexcom. 
            When I am not working I like to spend my time playing the drums, perfecting my BBQ skills,
            or going to the trails on my mountain bike. Another way I like unwind is by assuming the
            role as Dungeon Master and playing with my friends a homebrew campaign that I make. So far,
            it has been a very interesting and fun to make your own campaign. A lot goes into story telling
            and getting your audience (aka the players) involved.
          </p>
        </div>
        <div className='w-1/2 text-start'>
          <p className='text-white text-justify'>
            At the moment I hold a Bachlors and Master's degree in Computer Engineering from Florida
            International University. During the Master's program I mainly focused on learning all that
            I could about Machine Learning and AI. Knowning the in-n-outs of designing a model, training,
            validating, and also deploying them. As well as learning the basics of cloud computing and all the
            services offered.
          </p>
        </div>
        <div className='w-1/2 text-start'>
          <p className='text-white text-justify'>
            Now I try my best to stay up-to-date with the latest tech trends and new features. In the hopes
            of being able to improve the performance and reliability of Dexcom applications. As well as taking
            on unfamiliarly taks to expand my well of knowledge. Like creating a personal website using react 
            and github actions to implement CI/CD.
          </p>
        </div>
        
      </div>

      <div className="bg-gray-700 text-white h-full w-full">
        Home
      </div>

    </div>
  );
}

export default Home;
