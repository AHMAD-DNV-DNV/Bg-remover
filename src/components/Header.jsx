import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10  px-8 mt-10 lg:px-44 sm:mt-15">
      {/* left side */}
      <div>
        <h1 className="sm:text-2xl font-bold sm:leading-7">
          Remove the <br />
          <span className="text-blue-600">background</span> from
          <br /> images for free.
        </h1>
        <p className="font-thin text-[8px] leading-3 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            class="inline-flex gap-3 px-3 py-1.5 rounded-full  cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 mt-2"
            for="upload1"
          >
            <img width="10" src={assets.upload_btn_icon} alt="" />
            <p class="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* right side */}
      <div>
        <img className="h-80" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
