"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyState';
import Link from 'next/link';
import { db } from '@/config/db';
import { AiGeneratedImage } from '@/config/schema';
import { eq } from 'drizzle-orm';
import RoomDesignCard from './RoomDesignCard';

function Listing() {
    const {user} = useUser();
    const [userRoomList, setUserRoomList] = useState([]);

    useEffect(() => {
      user && GetUserRoomList();
    }, [user])

    const GetUserRoomList = async() => {
      const result = await db.select().from(AiGeneratedImage)
      .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

      setUserRoomList(result);
      console.log(result);
    }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold text-indigo-600'>Hello, {user?.fullName}</h2>
        <Link href={'/dashboard/create-new'}>
          <Button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg'>+ Redesign Room</Button>
        </Link>
      </div>

      {userRoomList?.length === 0?
        <EmptyState/>  // EmptyState
        :
        <div className='mt-10'>
            <h2 className='font-medium text-primary text-xl mb-10'>AI Room Studio</h2>
            {/* {Listing} */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {userRoomList.map((room, index) => (
                <RoomDesignCard key={index} room={room}/>
              ))}
            </div>
        </div>
      }
    </div>
  )
}

export default Listing
