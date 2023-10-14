import React from "react";

const Spinner = () => {
  return (
    <div class="flex mt-4">
      <div class="relative">
        <div
          class="w-12 h-12 rounded-full absolute
         border-8 border-dashed border-gray-200"
        ></div>

        <div
          class="w-12 h-12 rounded-full animate-spin absolute
         border-8 border-dashed border-purple-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
