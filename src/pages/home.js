import profile_photo from '../assets/gojo.jfif';

function Home() {
  return (
    <div className="grid grid-rows-3 grid-flow-col justify-items-center items-center">
      <div className="bg-gray-200 border-2 h-fit w-full flex flex-wrap content-around grid grid-cols-2">
        <div className="border-2 text-black">
          <h1 className="text-5xl">Home</h1>
          <p>This is a paragrah tag why is the header not bold</p>
        </div>
        <div className="border-2 text-black">
          <img src={profile_photo} alt="ProfilePhoto"/>
        </div>
      </div>
      <div className="bg-gray-500 border-2 h-auto w-full flex flex-wrap content-around">
        Home
      </div>
      <div className="bg-gray-700 text-white h-fit w-full">
        Home
      </div>
    </div>
  );
}

export default Home;
