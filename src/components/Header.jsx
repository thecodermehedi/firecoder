function Header() {
  return (
    <header>
      <nav className="container flex justify-between p-6 md:p-8">
        <div className="logo flex justify-center items-center gap-2">
          <img className="w-12" src="/icon.svg" alt="BurnImage" />
          <img className="w-48" src="/logo.svg" alt="FireCoder" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
