"use server";

import { NextResponse } from "next/server";
import { connect } from "../../../utils/db";
import user from "../../../model/form";

export const POST = async (request) => {
  await connect();

    const a = await request.json();
  try {
      console.log("dbs", a);
      const vk = {
          name: a.username,
          email: a.email,
        password: a.password,
          rating:a.rating
      };

      await user.insertMany([vk])

    return new NextResponse("data", { status: 200 });
  } catch (error) {
    console.log(error, "yguyg");
    return new NextResponse("no data get", { status: 500 });
  }
};
