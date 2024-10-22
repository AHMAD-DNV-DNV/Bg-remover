import React from "react";
import { assets } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div class="min-h-[80vh] text-center pt-14 mb-10">
      <button class="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 class="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that's right for you
      </h1>
      <div class="flex flex-wrap justify-center gap-6 text-left">
        <div class="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500">
          <img width="40" src={assets.logo_icon} alt="" />
          <p class="mt-3 font-semibold">Basic</p>
          <p class="text-sm">Best for personal use.</p>
          <p class="mt-6">
            <span class="text-3xl font-medium">$10</span>/ 100 credits
          </p>
          <button class="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
            Purchase
          </button>
        </div>
        <div class="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500">
          <img width="40" src={assets.logo_icon} alt="" />
          <p class="mt-3 font-semibold">Advanced</p>
          <p class="text-sm">Best for business use.</p>
          <p class="mt-6">
            <span class="text-3xl font-medium">$50</span>/ 500 credits
          </p>
          <button class="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
            Purchase
          </button>
        </div>
        <div class="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500">
          <img width="40" src={assets.logo_icon} alt="" />
          <p class="mt-3 font-semibold">Business</p>
          <p class="text-sm">Best for enterprise use.</p>
          <p class="mt-6">
            <span class="text-3xl font-medium">$250</span>/ 5000 credits
          </p>
          <button class="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
