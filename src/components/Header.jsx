import Logo from "./Logo";

function Header() {
  return (
    <header>
      <nav className="flex justify-between mx-auto p-6 md:p-8">
        <a href="../../index.html">
          <Logo />
        </a>
        <ul className="flex gap-8 text-gray-400 font-bold text-xl">
          <a
            href="#"
            className="hover:text-purple-500 transition-all duration-300 "
          >
            <li>Home</li>
          </a>
          <a
            href="https://dub.sh/blogsbymehedi"
            className="hover:text-purple-500 transition-all duration-300 "
            target="_blank"
            rel="noreferrer"
          >
            <li>Blogs</li>
          </a>
          <a href="#" className="text-orange-700 transition-all duration-300 ">
            <li>Courses</li>
          </a>
          <a
            href="https://dub.sh/mehedi"
            className="hover:text-purple-500 transition-all duration-300 "
            target="_blank"
            rel="noreferrer"
          >
            <li>About</li>
          </a>
          <a
            href="mailto:devbytemehedi@gmail.com"
            className="hover:text-purple-500 transition-all duration-300 "
          >
            <li>Contact</li>
          </a>
        </ul>
        <div className="flex gap-4">
          <div>
            <input
              className="border border-transparent bg-white bg-opacity-10 hover:bg-opacity-20 h-10 px-5 pr-16 rounded-xl text-sm focus:outline-none hover:border-purple-500 
              shadow-xl hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all text-gray-400 font-bold duration-300"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <button
            className="btn min-h-0 h-10 font-bold text-gray-800 text-lg hover:text-black bg-purple-500 
                hover:bg-purple-600 hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300 hover:border-transparent rounded-xl capitalize border-none"
          >
            login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
