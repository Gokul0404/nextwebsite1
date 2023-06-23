"use server";

import { NextResponse } from "next/server";

import { connect } from "../../../../utils/db"
import model from "../../../../model/form";

export const DELETE = async (req) => {
  await connect();
    const a =  req.url ;
    const value = a.split('/')
    const apk = value[5]
    

// console.log(req.url)
    
console.log(value[5])
    try {
      
        await model.findByIdAndDelete({ _id: apk })
    console.log("id delete");
    
    return new NextResponse("id get", { status: 200 });
  } catch (error) {
    // console.log(error)
    console.log("id not delete");

    return new NextResponse("id not get", { status: 500 });
  }
};
