"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { eves } from "../reducx/slice";


export default function Home() {
  const router = useRouter();
  
  const a = useSelector((e) => e.cart);
  console.log(a, "frompppp");



  return (
    <main>
      <div className="grid grid-cols-2 mt-5 ">
        <div className="">
          <div className="w-[50vw] pl-[30%] pt-[10%]">
            <span className="text-[60px] font-[900] hh">Better design </span>
            <span
              className={`text-[60px] font-[900] ${
                a.value
                  ? "text-white transition duration-700 ease-in-out "
                  : "text-black transition duration-700 ease-in-out"
              }`}
            >
              for your digital products.
            </span>
            <p className={`font-[600] text-[#cecece] pt-10`}>
              Excellent this is the correct method, outlining, not stroking.
              Works beautifully and it neat and easy on the eyes.
            </p>
            <button
              className="bg-[#13b196] flex px-2 py-1 rounded-md mt-5 font-bold text-white but"
              onClick={() => router.push("/contact")}
            >
              Let&apos;s Connect
              <Image
                src="/arrow.png"
                alt="gif"
                width={20}
                height={20}
                className="ml-2 invert  text-white mt-[2.5px]"
              ></Image>{" "}
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/home1.png"
            alt="img"
            width={548}
            height={80}
            className="contrast-[110%] saturate-[120%] im "
            draggable="false"
          />
        </div>
      </div>
    </main>
  );
}
