"use server";

import { NextResponse } from "next/server";
import { connect } from "../../../utils/db";
import user from "../../../model/form";
import bcrypt from 'bcryptjs';
export const POST = async (request) => {
  await connect();

  const a = (await request.json()) || (await request);
  
  async function hassPass(pass) {
    const en = await bcrypt.hash(pass, 10);
    return en
}

  try {
    console.log("dbs", a);
    

    const da = await hassPass(a.password);
    console.log("pak", da)
      const vk = {
          name: a.username,
          email: a.email,
        password: a.password,
        rating: a.rating,
          image:a.image
    };
    



console.log("imk", vk)
      await user.insertMany([vk])

    return new NextResponse("data", { status: 200 });
  } catch (error) {
    console.log(error, "yguyg");
    return new NextResponse("no data get", { status: 500 });
  }
};
