


import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';
import mailer from 'nodemailer'
import { toast } from 'react-toastify';

export const POST = async (req) => {

    const data = await req.json();
    console.log("mails", data.name);
    try {


      const transporter = mailer.createTransport({
        host: "example.com",
        port: 465,
        secure: true,

        service: "gmail",
        auth: {
          user: "gokul332020@gmail.com",
          pass: process.env.appPassword,
        },
        // secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      });
      const mailoptions = {
        from: "gokul332020@gmail.com",
        to: ["gokulspk04@gmail.com"],
        subject: "Message From Client",
        html: `<ul style="list-style:none; color:black;">
          <li> Name: ${data.name}</li>
          <li>MobileNumber: ${data.email}</li>
          <li>Email Id: ${data.message}</li>
       
        </ul>`,
      };
      transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
          Cookies.set("info", info.response);
          return new NextResponse("message: send", {status:200})
        }
      });
        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log("mail actions failed");
        return new NextResponse ("ERROR", {status:500})
    }
}
