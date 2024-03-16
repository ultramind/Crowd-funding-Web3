"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";

import { crowdingFundingContext } from "../Context/CrowdFunding";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(crowdingFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["White Paper", "Project", "Donation", "Members"];

  console.log(currentAccount);
  return (
    <div className="backgroundMain sticky top-0 right-0 left-0 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Company"
              title="Comapny"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span>
            </a>
            <ul className="text-white hidden  gap-6 space-x-8 items-center lg:flex">
              {menuList.map((list, i) => (
                <Link key={i} Link href="/">
                  {list}
                </Link>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul className="flex items-center hidden space-x-8">
              <li>
                <button
                  onClick={() => connectWallet()}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 focus:shadow-outline focus:outline-none backgroud"
                  aria-label="Sign Up"
                  title="Sign Up"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          <div className="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <a
                        href="/"
                        aria-label="title"
                        className="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Comapny
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                        title="close menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline font-bold"
                      >
                        X
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="flex flex-col space-y-4 mt-4">
                      {menuList.map((list, i) => (
                        <Link
                          key={i + 1}
                          href="/"
                          aria-label="Our Product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition duration-200 hover:text-purple-600"
                        >
                          {list}
                        </Link>
                      ))}
                      <Link
                        href="/"
                        className="inline-flex text-white items-center background justify-center w-full h-12 px-6 font-medium tracking-wide test-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="sign up"
                      >
                        Connect Wallet
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
