import { FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
    return(
    <div className="">
        <div className="bg-gray-500 h-auto w-full flex justify-center items-center gap-48">
            <div>
                <a href="https://github.com/powerSeries">
                    <FaGithub className="text-gray-800 hover:text-white transition duration-300 ease-in-out" size={100} />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/jose-e-sotolongo/">
                    <FaLinkedin className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out" size={100} />
                </a>
            </div>
        </div>
    </div>
    
    );
    
}

export default Social;