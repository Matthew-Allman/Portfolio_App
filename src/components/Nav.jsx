import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass={"active"}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center"
          >
            <BiHomeAlt />
            <p className="text-center text-[14px]">Home</p>
          </Link>
          <Link
            to="about"
            activeClass={"active"}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center"
          >
            <BiUser />
            <p className="text-center text-[14px]">About</p>
          </Link>
          <Link
            to="services"
            activeClass={"active"}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center"
          >
            <BsClipboardData />
            <p className="text-center text-[14px]">Services</p>
          </Link>
          <Link
            to="work"
            activeClass={"active"}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center"
          >
            <BsBriefcase />
            <p className="text-center text-[14px]">Work</p>
          </Link>
          <Link
            to="contact"
            activeClass={"active"}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center"
          >
            <BsChatSquare />
            <p className="text-center text-[14px] active:hidden">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
