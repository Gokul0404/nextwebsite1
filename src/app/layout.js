"use client";

// import Cookies from "js-cookie";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import stor, { eves } from "../reducx/slice";
import Tonggle from "./component/Tonggle";
import { SessionProvider} from 'next-auth/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lotos",
  description: "this is a description",
};

const store1 = configureStore({
  reducer: {
    cart: stor,
  },
});

export default function RootLayout({ children }) {
  const [one, setOne] = useState();

  const data = (data) => {
    setOne(!data);
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          one === true
            ? "bg-black !text-white transition duration-700 ease-in-out "
            : "transition duration-700 ease-in-out "
        }`}
      > 
     
        <Provider store={store1}>
           <SessionProvider>
          <Navbar /> {children}
          <Tonggle data={data} />
          <Footer /> </SessionProvider>
        </Provider> 
   
      </body>
    </html>
  );
}
