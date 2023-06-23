"use server";
import { NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Form from "@/model/form";

export const PATCH = async (req) => {
  await connect();

  const bc = await req.json();

  console.log("ehvfvj", bc);

  const id = bc.id;
  const va = {
    name: bc.username,
    email: bc.email,
    password: bc.password,
    rating: bc.rating,
  };

  try {
    console.log(va, "kjhgfhfuyyggu");

    const b = await Form.findByIdAndUpdate({ _id: id }, va);

    console.log("update");
    return new NextResponse(b, { status: 200 });
  } catch (error) {
    console.log("no update");
    return new NextResponse("not update", { status: 500 });
  }
};
