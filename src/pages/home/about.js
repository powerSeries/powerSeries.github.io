function AboutMe() {
    return (
        <div className="bg-gray-500 w-full h-full">
            {/* Header Section */}
            <div className='w-full flex justify-center items-center h-1/6'>
                <h1 className='text-5xl text'>About Me!</h1>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 p-4 content-around pb-24">
                <div className='w-full text-start'>
                    <p className='text-white text-justify text-base sm:text-lg md:text-xl lg:text-2xl'>
                        My name is Jose Sotolongo, I currently work as a software engineer for Dexcom.
                        When I am not working I like to spend my time playing the drums, perfecting my BBQ skills,
                        or going to the trails on my mountain bike. Another way I like unwind is by assuming the
                        role as Dungeon Master and playing with my friends a homebrew campaign that I make. So far,
                        it has been a very interesting and fun to make your own campaign. A lot goes into story telling
                        and getting your audience (aka the players) involved.
                    </p>
                </div>
                <div className='w-full text-start'>
                    <p className='text-white text-justify text-base sm:text-lg md:text-xl lg:text-2xl'>
                        At the moment I hold a Bachlors and Master's degree in Computer Engineering from Florida
                        International University. During the Master's program I mainly focused on learning all that
                        I could about Machine Learning and AI. Knowning the in-n-outs of designing a model, training,
                        validating, and also deploying them. As well as learning the basics of cloud computing and all the
                        services offered.
                    </p>
                </div>
                <div className='w-full items-start'>
                    <p className='text-white text-justify text-base sm:text-lg md:text-xl lg:text-2xl'>
                        Now I try my best to stay up-to-date with the latest tech trends and new features. In the hopes
                        of being able to improve the performance and reliability of Dexcom applications. As well as taking
                        on unfamiliarly tasks to expand my well of knowledge. Like creating a personal website using react
                        and github actions to auto build and deploying updates to my site. Quick and Easy! 
                    </p>
                </div>
            </div>
        </div> 
    );
}

export default AboutMe;