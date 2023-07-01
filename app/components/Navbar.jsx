import React, { useState } from "react";
import { styles } from "../styles";
import Link from "next/link";
import { close, logo, menu } from "../assets";
import lightLowLogo from "../assets/logo-low-light.svg";
import Image from "next/image";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          onClick={() => setActive("")}
          href="/"
          className="flex item-center gap-2"
        >
          <Image
            src={lightLowLogo}
            alt="Anas Esmaeel"
            className="w-14 h-14 -mt-4 -mb-4 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer ml-2">
            Anas Esmael <span>| Portofolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 justify-end items-center sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-2-[140px] z-10 rounded-xl`}
            onClick={() => {}}
          >
            <ul className="list-none flex  justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }  text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
