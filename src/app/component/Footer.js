"use client";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="h-full ">
      <div className="flex justify-between bg-[#75f8c6ab] py-1 shadow-lg  ">
        <p className="font-extralight text-[13px]  pl-5">
          @2023 sample.All rights reserved
        </p>

        <div className="flex gap-2 mr-5">
          <Image
            src="/1.png"
            width={25}
            height={25}
            alt="img"
            className="cursor-pointer"
          />
          <Image
            src="/3.png"
            width={25}
            height={25}
            alt="img"
            className="cursor-pointer"
          />
          <Image
            src="/2.png"
            width={25}
            height={25}
            alt="img"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
