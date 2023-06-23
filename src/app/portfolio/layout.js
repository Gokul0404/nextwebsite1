"use client";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="mt-5 flex justify-center ">
      <div className="container ml-[10%] pb-20">
        <h2 className="text-[60px] font-[900] ">Our Works</h2>
        <p className="text-[21px] font-semibold">Choose a Gallery</p>

        {children}
      </div>
    </div>
  );
}
