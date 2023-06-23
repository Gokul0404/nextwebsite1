"use client"

import React, { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { eves } from "../../reducx/slice";
import { CgCodeClimate } from "react-icons/cg";
import { FloatButton } from "antd";
export default function Tonggle(props) {
  const dispatch = useDispatch();
  const [sun, setSun] = useState(true);

  dispatch(eves(!sun));

  // const light = (e) => {

  //   setSun(!sun);

  // };

  sun ? props.data(true) : props.data(false);

  return (
    <>
      {/* <div className="togg">
        <div className="containera">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={(e) => a(e)}
          />
          <label className="switch" for="checkbox">
            <span className="slider"></span>
          </label>
        </div>
      </div> */}

      <div className="fixed right-5 bottom-[5%] cursor-pointer ">
        {/* <div
          className="bg-white border-1 ro border-black w-[35px] h-[35px] rounded-full flex justify-center items-center"
          onClick={(e) => light(e)}
        >
          {sun ? (
            <BiSun className="text-[25px] " />
          ) : (
            <BiMoon className="text-[25px] text-black " />
          )}
        </div> */}
        <FloatButton.Group
          trigger="click"
          style={{ right: 24 }}
          icon={<CgCodeClimate />}
        >
          <FloatButton
            onClick={() => setSun(true)}
            icon={<BiSun className="!text-orange-600" />}
          />
          <FloatButton
            onClick={() => setSun(false)}
            icon={<BiMoon className="!text-blue-600" />}
          />
        </FloatButton.Group>
      </div>
    </>
  );
}
