const Logo = () => {
  return (
    <div className="logo flex justify-center items-center gap-2">
      <img className="w-8 md:w-10 lg:w-12" src="/icon.png" alt="BurnImage" />
      <img className="w-48 hidden lg:block" src="/logo.png" alt="FireCoder" />
    </div>
  );
};

export default Logo;
