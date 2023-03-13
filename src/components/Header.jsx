import React from "react";

const Header = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a className="text-[30px] text-gradient" href="#home">
            Jordan Davis
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a href="https://www.lexxwebdesigns.com">Work With Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
