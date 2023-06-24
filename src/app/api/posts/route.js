"use server";
import { NextResponse } from "next/server";
import { connect } from "../../../utils/db"; //mongo db
import Del from "../../../model/det"; //schema
import Formss from "../../../model/form"; //login data schema

export const GET = async (request) => {
  await connect();
  try {
    console.log(Del, "process.env.MONGOOSE_URL");
    const posts = await Formss.find({});

    // console.log("eod", posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("no data", { status: 500 });
  }
};
