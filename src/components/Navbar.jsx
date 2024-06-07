import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mb-20">
      <div>
        <span className="mx-12 text-4xl flex flex-shrink-0 items-center">
          <a href="https://vigneshgovindrajportfolio-9usqfqh6q.vercel.app/">
            <BsPersonWorkspace />
          </a>
        </span>
        {/* <img
          className="mx-12 w-14 flex flex-shrink-0 items-center"
          src={logo}
          alt=""
        /> */}
      </div>
      <div className="flex items-center text-2xl gap-4 m-8 ">
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
