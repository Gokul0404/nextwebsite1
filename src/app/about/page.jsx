"use client"

import { Button } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
export default function Page() {

  const Router=useRouter()
  return (
    <div>
      <div className="py-5 flex px-[8%]">
        <div className="mt-10">
          <h2 className="  text-[60px] font-[900]">
            About <a className="text-green">Us</a>
          </h2>
          <div>
            Below are a series of poorly constructed paragraphs and possible
            solutions. Put yourself in the place of a teacher. Criticise the
            structure of each paragraph and suggest how it might be improved. Be
            very critical about how the paragraph is constructed and how well
            the ideas flow. Bali is predominantly a Hindu country. Bali is known
            for its elaborate, traditional dancing. The dancing is inspired by
            its Hindi beliefs. Most of the dancing portrays tales of good versus
            evil. To watch the dancing is a breathtaking experience. Lombok has
            some impressive points of interest – the majestic Gunung Rinjani is
            an active volcano. It is the second highest peak in Indonesia. Art
            is a Balinese passion.
          </div>

          <button
            onClick={() => Router.push("/contact")}
            className="bg-green flex px-2 py-1 rounded-md mt-5 font-bold text-white but"
          >
            Let&apos;s Connect
            <Image
              src="/arrow.png"
              alt="gif"
              width={20}
              height={20}
              className="ml-2 invert  text-white mt-[2.5px] "
            ></Image>{" "}
          </button>
        </div>
        <Image
          src="/about.png"
          alt="img"
          width={500}
          height={500}
          draggable="false"
          className="im1"
        />
      </div>
    </div>
  );
}
