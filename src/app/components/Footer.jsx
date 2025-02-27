import Link from "next/link";
import React from "react";
import { RiYoutubeFill, RiInstagramLine, RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1C1C1C] py-14">
        <div className="container mx-auto px-4">
          {/* Logo and Social Links */}
          <div className="flex justify-center items-center space-x-14">
            <img
              src="/images/logo.png"
              alt="brand-logo"
              className="cursor-pointer w-20 h-auto"
            />
            <div className="flex gap-3">
              <Link href="/" className="bg-white p-2 rounded-full text-red-800">
                <RiYoutubeFill className="text-3xl" />
              </Link>
              <Link href="/" className="bg-white p-2 rounded-full text-pink-500">
                <RiInstagramLine className="text-3xl" />
              </Link>
              <Link href="/" className="bg-white p-2 rounded-full text-blue-600">
                <RiFacebookFill className="text-3xl" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid p-3 text-lg grid-cols-1 md:grid-cols-4 mt-6">
            <div className=" flex flex-col lg:items-center ">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Mitao Bhook
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col lg:items-center align-top ">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col lg:items-center ">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col ">
              <Link href="/">
                <img
                  src="/images/appstore.png"
                  alt="app-store"
                  className="mt-3 w-32 h-auto"
                />
              </Link>
              <Link href="/">
                <img
                  src="/images/playstore.png"
                  alt="play-store"
                  className="mt-3 w-32 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="mt-2 text-white text-md lg:px-12 flex justify-between flex-col lg:flex-row md:flex-row ">
            <p className="m-0">2024 KFC. All rights reserved</p>
            <div>
              <h1 className="text-red-700 font-semibold">Powered by</h1>
              <Link href="/" className="  underline" >SimpleX Technology Solutions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
