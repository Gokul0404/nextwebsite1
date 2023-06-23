import { NextResponse } from "next/server";
import {connect} from '../../../utils/db'
import model from '../../../model/form'
import { data } from "autoprefixer";



export const POST = async (request) => {

    await connect();

    const a = await request.json();
    try {
      
        console.log(a)
        const datat = await model.find({email: a.email} );
        // console.log(datat)

        const as = JSON.stringify(datat)
        console.log(as)
        
        return new NextResponse(as, { status: 200 });
    } catch (error) {
        
        console.log(error)

        return new NextResponse("not get", { status: 500 });
  }
}