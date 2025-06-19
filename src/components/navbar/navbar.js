import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full shadow-sm bg-zinc-800 py-4 flex items-center">
      <div className="container mx-auto items-center grid grid-cols-2">
          <h1 className="text-white text-4xl items-start">
            Jose Sotolongo
          </h1>
          <div className="flex justify-end items-center space-x-4">
          {[
            ["Home", "/"],
            ["Project", "/project"],
            ["Contact", "/contact"],
          ].map(([title, url]) => (
            <Link
              key={title}
              to={url}
              className="lg:px-5 sm:px-3 text-white font-medium hover:bg-zinc-500 hover:text-slate-900 lg:justify-items-end">
              {title}
            </Link>
          ))}
        </div>

      </div>

    </nav>
  );
}