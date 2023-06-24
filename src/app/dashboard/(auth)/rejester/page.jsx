"use client";

import Link from "next/link";
import React, { use, useState } from "react";

import { Button, Form, Input, Rate, Upload } from "antd";
import {  PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Image from "next/image";

export default function Rejester(props) {
  const [te, setTe] = useState();

  const rati = (e) => {
    setTe(e);
  };

  const [form] = Form.useForm();
  const [imageList, setImageList] = useState();


  const uploadImage = (e) => {
    // setImageList(e.name);

    try {
      //base64.............................
      const data = new FileReader();

      data.addEventListener("load", () => {
        setImageList(data.result);
      });

      data.readAsDataURL(e);

      // console.log(imageList);
      console.log(e);
    } catch (error) {
      console.log("errror");
    }
  };



  const onFinish = async (value) => {
    // console.log("form", value);
    const values = { ...value, rating: te, image: imageList };

    try {
      await axios.post("/api/user", values);

      form.resetFields();
      console.log("sended");

      console.log("po", props.ressend("wq2j"));
    } catch (err) {
      console.log("no send ", err);
    }
  };


  return (
    <div className="mt-5 flex justify-center flex-col py-[10%]">
      <div className="flex justify-center">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "enter valid email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Rate allowHalf defaultValue={4} onChange={(e) => rati(e)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              className="!bg-blue-500 !text-white hover:!text-white"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Upload
        listType="picture-card"
        maxCount={1}
        // showUploadList={false}
        action="/api/uploadimg"
        // action="/api/uploadimg"
        onChange={(e) => uploadImage(e.file.originFileObj)}
      >
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
      {/* <Image src={imageList} width={50} height={50} alt="ok" /> */}
      <div className="text-center">
        <Link
          href="/dashboard/login"
          className="!text-center  text-[14px] font-bold text-gray-400"
        >
          Already Rejester to Login
        </Link>
      </div>
    </div>
  );
}
