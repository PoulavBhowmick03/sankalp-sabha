import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [anonAadhaar] = useAnonAadhaar();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const router = useRouter();


    return (
      <div>
        <nav className='w-full py-4 px-8 flex justify-between items-center text-white'>
          <div className='text-4xl font-bold'>
            <Link href='/'>Awaaz Uthao</Link>
          </div>

          {/* Hamburger icon for mobile */}
          <div
            className='lg:hidden cursor-pointer fixed top-4 right-4 z-50'
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </div>

          {/* Navigation links for larger screens */}
          <ul
            className={`lg:flex items-center space-x-8 ${
              menuOpen ? "flex-col mt-4" : "hidden"
            } lg:mt-0`}
          >
            <li
              className={`font-poppins text-lg cursor-pointer  hover-text-fuchsia-500 ${
                active === "Home" ? "text-fuchsia-500" : "text-gray-300"
              } transition-colors duration-300`}
              onClick={() => setActive("Home")}
            >
              <Link href='/'>Home</Link>
            </li>
            {anonAadhaar.status==="logged-in" && (
              <>
                <li
                  className={`font-poppins text-lg cursor-pointer hover:text-fuchsia-500 ${
                    active === "Features" ? "text-fuchsia-500" : "text-gray-300"
                  } transition-colors duration-300`}
                  onClick={() => setActive("Features")}
                >
                  <Link href='/forum/proposal'>Proposals</Link>
                </li>
                <li
                  className={`font-poppins text-lg cursor-pointer hover:text-fuchsia-500 ${
                    active === "Product" ? "text-fuchsia-500" : "text-gray-300"
                  } transition-colors duration-300`}
                  onClick={() => setActive("Product")}
                >
                  <Link href='/forum/fir'>FIR</Link>
                </li>
              </>
            )}
            <li
              className={`font-poppins text-lg cursor-pointer hover:text-fuchsia-500 ${
                active === "Clients" ? "text-fuchsia-500" : "text-gray-300"
              } transition-colors duration-300`}
              onClick={() => setActive("Clients")}
            >
              <Link href='/auth'>For Authorities</Link>
            </li>
            {/* <LogInWithAnonAadhaar/> */}
            <LogInWithAnonAadhaar />

          </ul>
        </nav>
      </div>
    );
  }

