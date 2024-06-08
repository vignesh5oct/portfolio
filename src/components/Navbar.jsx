import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mb-20">
      <div>
        <span className="p-4 text-3xl flex flex-shrink-0 items-center sm:text-4xl ">
          <a href="https://mydeveloperportfolio-d2138.firebaseapp.com/">
            <BsPersonWorkspace />
          </a>
        </span>
      </div>
      <div className="flex items-center text-xl gap-4 m-8 mx-2 sm:text-2xl">
        <a href="https://www.linkedin.com/in/vignesh-govindaraj/">
          <div className="flex items-center">
            <span>LinkedIn</span>
            <span className="mx-2">
              <FaLinkedin />
            </span>
          </div>
        </a>
        <a href="https://github.com/vignesh5oct">
          <div className="flex items-center">
            <span>Github</span>
            <span className="mx-2">
              <FaGithub />
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
