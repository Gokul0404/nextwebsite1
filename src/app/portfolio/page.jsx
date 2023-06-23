import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function portfolio() {
  return (
    <div className="py-5">
      <div className="flex gap-10 ">
        <Link rel="preload" href="/portfolio/illustration">
          <div className="border-[5px] border-black w-[250px] h-[300px] gal relative">
            <p className="font-[900] text-[13px] absolute bottom-0 left-3 text-white">
              Illustration
            </p>
          </div>
        </Link>
        <Link rel="preload" href="/portfolio/website">
          <div className="border-[5px] border-black w-[250px] h-[300px] gal2 relative">
            <p className="font-[900] text-[13px] absolute bottom-0 left-3 text-white">
              Website
            </p>
          </div>
        </Link>
        <Link rel="preload" href="/portfolio/application">
          <div className="border-[5px] border-black w-[250px] h-[300px] gal3 relative">
            <p className="font-[900] text-[13px] absolute bottom-0 left-3 text-white">
              Application
            </p>
          </div>
        </Link>
        <Link rel="preload" href="/portfolio/animation">
          <div className="border-[5px] border-black w-[250px] h-[300px] gal4 relative">
            <p className="font-[900] text-[13px] absolute bottom-0 left-3 text-white">
              3D Animation
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
