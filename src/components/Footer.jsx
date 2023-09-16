import Logo from "./Logo";
import {FaFacebook, FaGithub, FaXTwitter} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-primary-content bg-black">
      <aside>
        <a href="../../index.html">
          <Logo />
        </a>
        <p className="font-bold text-lg">Learn to code Smarter</p>
        <p className="font-semibold opacity-50">© 2023 FireCoder</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="text-4xl hover:text-purple-600"
            href="https://facebook.com/iamrealmehedi"
          >
            <FaFacebook />
          </a>
          <a
            className="text-4xl text-red-700"
            href="https://github.com/devbytemehedi/firecoder"
          >
            <FaGithub />
          </a>
          <a
            className="text-4xl hover:text-purple-600"
            href="https://twitter.com/devbytemehedi"
          >
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
