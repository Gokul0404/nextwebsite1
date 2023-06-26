"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

import { toast } from "react-toastify";

export default function Contact() {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };
  const [val, setVal] = useState(initialValue);

  const valks = (e, filed) => {
    setVal((pre) => ({ ...pre, [filed]: e.target.value }));
  };
  const conts = async (e) => {
    e.preventDefault();

    try {
      const da = await axios.post("/api/email", val);
      console.log("succes", da);
      toast.success("Email sended successfuly")
      setVal(initialValue);
    } catch (error) {
      console.log("email data not send", error);
    }
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
                    name="name"
                    className="pt-2 border-b outline-none"
                    onChange={(e) => valks(e, "name")}
                    value={val.name}
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-gray-400">Email</label>
                  <input
                    type="text"
                    required="true"
                    className="pt-2 border-b outline-none"
                    name="email"
                    value={val.email}
                    onChange={(e) => valks(e, "email")}
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-gray-400">Message</label>
                  <textarea
                    type=""
                    required="true"
                    name="message"
                    className="pt-2 border-b outline-none"
                    value={val.message}
                    onChange={(e) => valks(e, "message")}
                  ></textarea>
                </div>
                {/* <div className="bg-green text-center rounded-md my-4 cursor-pointer"> */}
                <button
                  name="submit "
                  className="w-full mt-5 rounded-md bg-green text-white font-bold py-2"
                  onClick={(e) => conts(e)}
                >
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
