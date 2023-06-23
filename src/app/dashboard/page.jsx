"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Rate, Spin, Table, Tooltip } from "antd";
import { Button, Popconfirm, Form, Input } from "antd";

import { useSelector } from "react-redux";
import { BiTrashAlt, BiEdit } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
// import { cookies } from "next/dist/client/components/headers";
// import { red } from "@mui/material/colors";
import { ColorPicker, theme } from "antd";
import Rejester from "./(auth)/rejester/page";

export default function Dashboard() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modal2Open, setModal2Open] = useState(false);
  const [rej, setRej] = useState(false);
  const [details, setDetails] = useState(false);
  const [details2, setDetails2] = useState(false);
  const [details3, setDetails3] = useState(false);
  const [detailsid, setDetailsid] = useState(false);
  const [rast, setRast] = useState(false);

  // const[pro,setPro]=useState("false")

  const [colors, setColors] = useState();

  //color picker................

  const ok = (e, s) => {
    console.log("sss", s);
    setColors(s);
  };

  //rating...................
  const [rating, setRating] = useState();

  const a = useSelector((e) => e.cart);
  console.log("details", details3);

  //get datas db.....................

  const valuess = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/posts");
      setDatas(res.data);
      // console.log("database",res.data)
    } catch (error) {
      console.log("error called data", error);
    } finally {
      setLoading(false);
    }
  };

  //delete api functions/...............................
  const deletes = async (e) => {
    try {
      const a = await axios.delete(`/api/delets/${e}`);
      console.log(`delete success id ${a}`);
      valuess();
    } catch (error) {
      console.log("not delete the id");
    }
  };

  //update the datas.....................................

  const onFinish = async (values) => {
    console.log("Success:", values);

    const value = { ...values, id: detailsid, rating: rating };
    try {
      await axios.patch("/api/update", value);
      console.log("upadet succes");
      setModal2Open(false);
      valuess();
    } catch (error) {
      console.log("update fail");
    }
  };

  const ressend = (e) => {
    console.log("yk", e);
    setRej(false);
    valuess();
  };
  useEffect(() => {
    valuess();
  }, []);

  // console.log("apple", datas);

  const columns = [
    {
      title: "S.No",

      key: "0",
      render(a, b, index) {
        return index + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
    },
    {
      title: "Database_ID",
      dataIndex: "_id",
      key: "3",
    },
    {
      title: "Edit",
      key: "4",
      render(a, b, c) {
        return (
          <>
            <div className="flex gap-x-5">
              <Popconfirm
                title="Delete the User"
                description="Are you sure to delete this User?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => deletes(a._id)}
              >
                <BiTrashAlt className="text-[17px] text-red-600 cursor-pointer" />
              </Popconfirm>
              {/* {console.log("jh",a._id)} */}
              <BiEdit
                className="text-[17px] text-blue-700 cursor-pointer"
                onClick={() => {
                  setDetails(a.name);
                  setDetails2(a.email);
                  setDetails3(a.password);
                  setDetailsid(a._id);
                  setRast(a.rating);
                  setModal2Open(true);
                }}
              />
            </div>
          </>
        );
      },
    },
    {
      title: "Rating",

      key: "5",
      render(a, b, c) {
        return (
          <>
            <Rate
              allowHalf
              disabled
              defaultValue={rast}
              value={a.rating}
              style={{ color: `${colors}` }}
            />
            {console.log("tk", a.rating)}
          </>
        );
      },
    },
  ];

  const name = useSelector((e) => e.cart);
  const b = name.user.name;
  console.log("name", name.user.name);

  return (
    <>
      <div className="text-center font-bold mt-10">
        <h1>Welcome: {b}</h1>
      </div>
      <div className="absolute right-10 z-50  ">
        <Tooltip title="Add User">
          <button
            onClick={() => setRej(true)}
            className=" !cursor-pointer w-[35px] h-[35px]  rounded-full bg-white shadow-md flex justify-center items-center hover:shadow-inner"
          >
            <AiOutlineUserAdd
              className={` ${
                a.value
                  ? "font-bold !text-[18px] !cursor-pointer text-black transition duration-700 ease-in-out"
                  : "font-bold !text-[18px] !cursor-pointer transition duration-700 ease-in-out"
              } `}
            />
          </button>
        </Tooltip>
      </div>
      <Spin spinning={loading}>
        <div className="flex justify-center">
          <Table
            dataSource={datas}
            columns={columns}
            pagination={{
              pageSize: 5,
            }}
            style={{ width: "60%", marginTop: "5%" }}
            className={`${
              a.value
                ? "!bg-black !text-white transition duration-700 ease-in-out"
                : "!bg-white !text-black transition duration-700 ease-in-out"
            }`}
          />
        </div>
      </Spin>

      <div className=" flex flex-col justify-center items-center text-center gap-y-4 py-5">
        <div className="w-[20%]">
          <div className="flex">
            <progress
              className="progress progress-accent w-56"
              value={50}
              max="100"
            ></progress>
            <span className="mt-[-3%] pl-3">50%</span>
          </div>
          <div className="flex">
            <progress
              className="progress progress-accent w-56"
              value={20}
              max="100"
            ></progress>
            <span className="mt-[-3%] pl-3">20%</span>
          </div>
          <div className="flex">
            <progress
              className="progress progress-accent w-56"
              value={60}
              max="100"
            ></progress>
            <span className="mt-[-3%] pl-3">60%</span>
          </div>
          <div className="flex">
            <progress
              className="progress progress-accent w-56"
              value={37}
              max="100"
            ></progress>
            <span className="mt-[-3%] pl-3">37%</span>
          </div>
          <div className="flex">
            <progress
              className="progress progress-accent w-56"
              value={80}
              max="100"
            ></progress>
            <span className="mt-[-3%] pl-3">80%</span>
          </div>
        </div>
      </div>

      <Modal
        footer={null}
        title="Update the Datas"
        destroyOnClose
        centered
        open={rej}
        onOk={() => setRej(false)}
        onCancel={() => setRej(false)}
      >
        <Rejester ressend={ressend} />
      </Modal>
      <Modal
        footer={null}
        title="Update the Datas"
        destroyOnClose
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="!mt-5"
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            initialValue={details}
            name="username"
            rules={[{ message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            initialValue={details2}
            rules={[{ message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            initialValue={details3}
            name="password"
            rules={[{ message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Rate
              allowHalf
              defaultValue={rast}
              onChange={(e) => setRating(e)}
            />
          </Form.Item>
          <Form.Item>
            <ColorPicker value={colors} onChange={(e, s) => ok(e, s)} />
          </Form.Item>
          <Form.Item>
            <div className=" flex gap-x-5">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => setModal2Open(false)}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
