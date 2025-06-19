import AlesisProject from './components/AlesisProject';

function Project() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto_auto]">
      {/* Header Section */}
      <div className="w-full h-auto grid grid-cols-2 ">

        <div className="text-black h-1/2 flex flex-col border-4 border-cyan-900 bg-cyan-200 p-3">
          <h2 className="text-3xl font-bold mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {[
              { name: 'Alesis Project', path: '/project/AlesisProject' },
            ].map((item, index) => (
              <li key={index} className="text-lg">
                <a href={item.path} className="text-blue-800 hover:text-blue-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Placeholder for additional content */}
          Content goes here
        </div>
      </div>

      <div className='col-span-2'>
        <div id="AlesisProject">
          <AlesisProject />
        </div>

      </div>
    </div>
  );
}

export default Project;