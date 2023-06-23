"use client";
import { loginid } from "@/reducx/slice";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import form from "@/model/form";
import Navbar from "@/app/component/Navbar";
import Cookies from "js-cookie";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const onFinish = async (e) => {
    try {
      await axios.post("http://localhost:3000/api/loginget", e).then((res) => {
        console.log("oi", res.data[0]);
        console.log("oo", res.data[0] === undefined);
        if (res.data[0] === undefined) {
          console.log("not match id");

          Cookies.set("log", false);
          dispatch(loginid("false"));
        } else {
          Cookies.set("log", JSON.stringify(res.data[0]));
          console.log("navigate", res.data[0]);
          dispatch(loginid(res.data[0]));
          navigate.push("/dashboard");
        }
      });
      console.log("send login data");
    } catch (error) {
      console.log("not send login data");
    }
  };

  return (
    <div className="mt-5 py-[10%]">
      <div className="flex justify-center">
        <div className=" w-[400px]">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className=" !mx-[80px]"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
              className="!w-[400px] "
            >
              <Input />
            </Form.Item>

            <Form.Item
              id="basic_password"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="!w-[400px] pl-10"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item className="flex justify-center ">
              <Button
                className="!bg-blue-500 !text-white hover:!text-white !h-[40px] !px-20 !text-[14px] !font-bold ml-7"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center ml-7 ">
        <div>
          <button
            onClick={() => signIn("google")}
            className="bg-green h-[40px] !w-[15vw] rounded-md text-white font-bold text-[14px]"
          >
            Login with Google
          </button>
        </div>
        <div className="text-center pt-3  ">
          <Link
            href="/dashboard/rejester"
            className="font-bold text-[14px] text-gray-500"
          >
            Resjester
          </Link>
        </div>
      </div>
    </div>
  );
}
