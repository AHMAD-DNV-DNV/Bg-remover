import React from "react";
import { assets } from "../assets/assets";
const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparentmb-12 sm:mb-5 py-6 md:py-6">
        See the magic. Try now
      </h1>
      <div className="text-center">
        <input type="file" name="" id="upload2" hidden />
        <label
          class="inline-flex gap-3 px-5 py-2 rounded-full  cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 mt-2"
          for="upload2"
        >
          <img width="10" src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-lg">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
