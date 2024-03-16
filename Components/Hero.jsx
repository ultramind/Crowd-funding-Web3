import Link from "next/link";
import React from "react";
import { AddCampaign } from "./index";

const Hero = ({ title, createCampaign }) => {
  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        {/* Add new campaign */}
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:leading-none">
                UltraCryp <br className="hidden md:block" />
                Crowd Funding UK
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                itaque cum eius tempora magni adipisci mollitia dolore ipsum
                facere eligendi?
              </p>
              <Link
                href="/"
                className="inline-flex items-center font-semibold tracking-wider transition-color duration-200 text-white hover:text-teal-600 text-gray"
              >
                Learn More
                <svg className="inline-block w-3 ml-2" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                  />
                </svg>
              </Link>
            </div>
            {/* add campaign form */}
            <AddCampaign createCampaign={createCampaign} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
