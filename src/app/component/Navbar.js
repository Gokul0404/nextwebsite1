"use client";
import { loginid } from "@/reducx/slice";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const handleLogout = async () => {
    signOut();

    dispatch(loginid("false"));
    Cookies.set("log", "false");
  };

  const dt = useSelector((e) => e.cart);

  console.log("login", dt.user);

  console.log("ssssssss", dt.user === false);

  // console.log(dt.user);
  // if ( dt.user === false ) {
  //   navigate.push("/dashboard/login");
  //   console.log("nooo");
  // } else {
  //   navigate.push("/dashboard");
  //   console.log("yessssss");
  // }

  return (
    <div>
      <div className="  shadow-lg shadow-black-500/50 w-full ">
        <div className="container mx-auto ">
          <div className="flex justify-between text-[#afafaf] font-[500] text-[15px]">
            <div className="flex">
              <Link href="/">
                <Image
                  src="/lotus.png"
                  width={45}
                  height={50}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="img"
                  className="py-2 contrast-[110%] saturate-[150%] "
                />
              </Link>
              <Link href="/">
                <p className="text-[10px] font-[500] mt-6 pl-1">Lotos</p>
              </Link>
            </div>
            <div className="flex gap-6">
              <div className="flex list-none gap-5 mt-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link
                    href={`${
                      dt.user === false ? "/dashboard/login" : "/dashboard"
                    }`}
                    // href='/dashboard/login'
                    onClick={() => dash()}
                  >
                    Dashboard
                  </Link>
                </li>
              </div>
              <button
                onClick={() => handleLogout()}
                className="bg-[#13b196] w-[15%] h-9 mt-3 px-2 rounded-2xl  text-white border border-[#08d19f]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
