"use client";

import Image from "next/image";
import React from "react";

export default function contact() {
  const da = (e) => {
    console.log(e);
  };
  return (
    <div className="mt-5">
      <div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/contact.png"
              alt="img"
              width={550}
              height={500}
              className="im1"
              draggable="false"
            ></Image>
          </div>

          <div>
            <div className="mx-auto w-[80%] mt-4 md:px-3">
              <h2 className="mb-5 text-[60px] font-[900] ">
                Contact <a className="text-green">Us</a>
              </h2>
              <form>
                <div className="flex flex-col py-2">
                  <label className="text-gray-400">Name</label>
                  <input
                    type="text"
                    required="true"
                    className="pt-2 border-b outline-none"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-gray-400">Email</label>
                  <input
                    type="text"
                    required="true"
                    className="pt-2 border-b outline-none"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-gray-400">Message</label>
                  <textarea
                    type=""
                    required="true"
                    className="pt-2 border-b outline-none"
                  ></textarea>
                </div>
                {/* <div className="bg-green text-center rounded-md my-4 cursor-pointer"> */}
                <button className="w-full mt-5 rounded-md bg-green text-white font-bold py-2">
                  Submit
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
