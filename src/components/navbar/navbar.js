import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex sm:justify-center space-x-4 shadow-sm bg-zinc-800">
      <h1 className="px-3 py-2 flex sm:justify-start space-x-4 text-white">Jose Sotolongo</h1>
      {[
        ["Home", "/"],
        ["Project", "/project"],
        ["Contact", "/contact"],
      ].map(([title, url]) => (
        <Link
          key={title}
          to={url}
          className="px-3 py-2 text-white font-medium hover:bg-zinc-500 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}