function Header() {
  return (
    <header>
      <nav className="flex justify-between mx-auto p-6 md:p-8">
        <div className="logo flex justify-center items-center gap-2">
          <img className="w-12" src="/icon.png" alt="BurnImage" />
          <img className="w-48" src="/logo.png" alt="FireCoder" />
        </div>

        <div className="flex gap-4">
          <ul className="flex gap-8 text-gray-400 font-bold text-xl">
            <a href="#" className="hover:text-purple-500">
              <li>blogs</li>
            </a>
            <a href="#" className="hover:text-orange-700">
              <li>courses</li>
            </a>
          </ul>
          <div>
            <input
              className="border border-transparent bg-white bg-opacity-10 hover:bg-opacity-20 h-10 px-5 pr-16 rounded-xl text-sm focus:outline-none hover:border-purple-500 
              shadow-xl hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all text-gray-400 font-bold"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <button
            className="btn min-h-0 h-10 font-bold text-black text-lg hover:text-white bg-white 
                hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300 hover:border-transparent rounded-xl"
          >
            login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
