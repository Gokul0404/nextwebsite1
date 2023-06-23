import Image from "next/image";
import React from "react";

export default function category({ params }) {
  console.log({ params });
  return (
    <div>
      <h1 className="capitalize text-gray-400">{params.category}</h1>
      <div className="grid grid-cols-2 pt-10">
        <div>
          <div className="w-[80%]">
            <h2 className="text-[28px] font-[800]">Creative Portfolio</h2>
            <p className="pt-3">
              Some members of his movement later engaged in less peaceful
              protests. Luther King was detained several times. The longest jail
              sentence he received was four months. Martin Luther King’s famous
              1963 speech, “I Have a Dream”, inspired many African.
            </p>
            <button className="bg-green  px-2 py-1 rounded-md mt-5 font-bold text-white">
              See more
            </button>
          </div>
        </div>
        <div>
          <Image
            draggable="false"
            src="/cat1.png"
            alt="img"
            width={600}
            height={500}
            className="w-[80%] "
          ></Image>
        </div>

        <div></div>
      </div>
      <div className="grid grid-cols-2 pt-10">
        <div>
          <Image
            draggable="false"
            src="/cat1.png"
            alt="img"
            width={600}
            height={500}
            className="w-[80%] "
          ></Image>
        </div>

        <div>
          <div className="w-[80%]">
            <h2 className="text-[28px] font-[800]">Mikaela Reuben </h2>
            <p className="pt-3">
              Some members of his movement later engaged in less peaceful
              protests. Luther King was detained several times. The longest jail
              sentence he received was four months. Martin Luther King’s famous
              1963 speech, “I Have a Dream”, inspired many African.
            </p>
            <button className="bg-green  px-2 py-1 rounded-md mt-5 font-bold text-white">
              See more
            </button>
          </div>
        </div>

        <div></div>
      </div>
      <div className="grid grid-cols-2 pt-10">
        <div>
          <div className="w-[80%]">
            <h2 className="text-[28px] font-[800]">Seasons in Colour </h2>
            <p className="pt-3">
              Some members of his movement later engaged in less peaceful
              protests. Luther King was detained several times. The longest jail
              sentence he received was four months. Martin Luther King’s famous
              1963 speech, “I Have a Dream”, inspired many African.
            </p>
            <button className="bg-green  px-2 py-1 rounded-md mt-5 font-bold text-white">
              See more
            </button>
          </div>
        </div>
        <div>
          <Image
            draggable="false"
            src="/cat1.png"
            alt="img"
            width={600}
            height={500}
            className="w-[80%] "
          ></Image>
        </div>

        <div></div>
      </div>
      <div className="grid grid-cols-2 pt-10">
        <div>
          <Image
            draggable="false"
            src="/cat1.png"
            alt="img"
            width={600}
            height={500}
            className="w-[80%] "
          ></Image>
        </div>

        <div>
          <div className="w-[80%]">
            <h2 className="text-[28px] font-[800]">Olivia and Laura</h2>
            <p className="pt-3">
              Some members of his movement later engaged in less peaceful
              protests. Luther King was detained several times. The longest jail
              sentence he received was four months. Martin Luther King’s famous
              1963 speech, “I Have a Dream”, inspired many African.
            </p>
            <button className="bg-green  px-2 py-1 rounded-md mt-5 font-bold text-white">
              See more
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
