import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="mt-5 flex justify-center ">
      <div className="container scale-[90%]">
        <div className="grid grid-cols-2 pb-5">
          <div className="flex justify-center">
            <Image
              draggable="false"
              src="/blog.png"
              alt="img"
              width={500}
              height={200}
              className="w-[60%]"
            ></Image>
          </div>
          <div className="w-[80%] text-justify flex flex-col justify-center">
            <h2 className="text-[35px] font-bold">Zion Adventure Photog</h2>
            <p className="pt-3">
              When you&apos;re first approaching the question of how to start a
              blog, check out Zion Adventure Photog. The blog has a dual
              purpose: owner Arika&apos;s photography portfolio and establishing
              her expertise of the Zion area. With these, she&apos;s able to
              make money blogging.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="flex justify-center">
            <Image
              draggable="false"
              src="/blog3.png"
              alt="img"
              width={500}
              height={200}
              className="w-[60%]"
            ></Image>
          </div>
          <div className="w-[80%] text-justify flex flex-col justify-center">
            <h2 className="text-[35px] font-bold">Simply Tabitha </h2>
            <p className="pt-3">
              When you&apos;re first approaching the question of how to start a
              blog, check out Zion Adventure Photog. The blog has a dual
              purpose: owner Arika&apos;s photography portfolio and establishing
              her expertise of the Zion area. With these, she&apos;s able to
              make money blogging.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="flex justify-center">
            <Image
              draggable="false"
              src="/blog4.png"
              alt="img"
              width={500}
              height={200}
              className="w-[60%]"
            ></Image>
          </div>
          <div className="w-[80%] text-justify flex flex-col justify-center">
            <h2 className="text-[35px] font-bold">Lizzy Hadfield</h2>
            <p className="pt-3">
              When you&apos;re first approaching the question of how to start a
              blog, check out Zion Adventure Photog. The blog has a dual
              purpose: owner Arika&apos;s photography portfolio and establishing
              her expertise of the Zion area. With these, she&apos;s able to
              make money blogging.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="flex justify-center">
            <Image
              draggable="false"
              src="/blog2.png"
              alt="img"
              width={500}
              height={200}
              className="w-[60%]"
            ></Image>
          </div>
          <div className="w-[80%] text-justify flex flex-col justify-center">
            <h2 className="text-[35px] font-bold">Suvelle Cuisine </h2>
            <p className="pt-3">
              When you&apos;re first approaching the question of how to start a
              blog, check out Zion Adventure Photog. The blog has a dual
              purpose: owner Arika&apos;s photography portfolio and establishing
              her expertise of the Zion area. With these, she&apos;s able to
              make money blogging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
