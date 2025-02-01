"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    //"p-5 shadow-lg flex justify-between items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"
    <div className="p-5 shadow-lg flex justify-between items-center bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 rounded-lg">
      <div className="flex items-center gap-4">
        <Image
          src={"/logo.svg"}
          alt="Company Logo"
          width={50}
          height={50}
          priority
        />
        <h2 className="text-xl font-extrabold text-indigo-600 tracking-wider">
          AI Room Design
        </h2>
      </div>

      <Link href={"/dashboard/buy-credits"}>
        <Button
          varient="ghost"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" //hover:opacity-60
        >
          Buy More Credits
        </Button>
      </Link>

      <div className="flex items-center gap-7">
        <div className="flex gap-2 p-2 items-center bg-slate-300 px-4 rounded-full shadow-sm">
          <Image
            src="/star.png"
            alt="Star Icon"
            width={20}
            height={20}
            priority
          />
          <h2 className="text-lg font-bold text-gray-700">
            {userDetail?.credits}
          </h2>
        </div>
        <UserButton />
      </div>
    </div>

    // <div className='p-5 shadow-lg flex justify-between items-center'>
    //     <div className='flex items-center gap-2'>
    //         <Image src={'/logo.svg'} alt="Company Logo" width={40} height={40} priority />
    //         <h2 className='text-lg font-bold'>AI Room Design</h2>
    //     </div>

    //     <Button varient='ghost' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">Buy More Credits</Button>
    //     <div className='flex items-center gap-7'>
    //         <div className='flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full'>
    //             <Image src="/star.png" alt="Star Icon" width={20} height={20} priority />
    //             <h2>{userDetail?.credits}</h2>
    //         </div>
    //         <UserButton/>
    //     </div>
    // </div>
  );
}

export default Header;
