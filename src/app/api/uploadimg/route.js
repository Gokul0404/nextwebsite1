import { NextResponse } from "next/server";
import { connect } from '../../../utils/db'


export const POST = async (req) => {

    await connect();
    try {
        console.log(await req[0]);
        return new NextResponse('get img url', {status:200})
        
    } catch (error) {
        console.log("not send ", error);
        return new NextResponse('not get img url', {status:500})
        
    }
}        