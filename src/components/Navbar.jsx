import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import logo from "../assets/kevinRushProfile.jpg"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mb-20">
      <div>
        <img className="mx-12 w-14 flex flex-shrink-0 items-center"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex items-center text-2xl gap-4 m-8 ">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
