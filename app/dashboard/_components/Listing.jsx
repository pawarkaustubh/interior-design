"use client";
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import EmptyState from './EmptyState';
import Link from 'next/link';
import { db } from '@/config/db';
import { AiGeneratedImage } from '@/config/schema';
import { eq } from 'drizzle-orm';
import RoomDesignCard from './RoomDesignCard';

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  useEffect(() => {
    user && GetUserRoomList();
  }, [user]);

  const GetUserRoomList = async () => {
    const result = await db.select().from(AiGeneratedImage)
      .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

    setUserRoomList(result);
    console.log(result);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-violet-300">Hello, {user?.fullName}</h2>
        <Link href="/dashboard/create-new">
          <Button className="px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-md">
            + Redesign Room
          </Button>
        </Link>
      </div>

      {userRoomList?.length === 0 ? (
        <div className="mt-16">
          <EmptyState />
        </div>
      ) : (
        <div className="mt-12">
          <h3 className="font-semibold text-lg text-indigo-600 dark:text-violet-200 mb-6 border-b-2 pb-2 border-indigo-300 dark:border-violet-600 w-fit">
            ✨ Your AI Room Studio
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRoomList.map((room, index) => (
              <RoomDesignCard key={index} room={room} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listing;

// "use client";
// import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs';
// import React, { useEffect, useState } from 'react';
// import EmptyState from './EmptyState';
// import Link from 'next/link';
// import { db } from '@/config/db';
// import { AiGeneratedImage } from '@/config/schema';
// import { eq } from 'drizzle-orm';
// import RoomDesignCard from './RoomDesignCard';

// function Listing() {
//   const { user } = useUser();
//   const [userRoomList, setUserRoomList] = useState([]);

//   useEffect(() => {
//     user && GetUserRoomList();
//   }, [user]);

//   const GetUserRoomList = async () => {
//     const result = await db.select().from(AiGeneratedImage)
//       .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

//     setUserRoomList(result);
//     console.log(result);
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h2 className="text-3xl font-bold text-indigo-700 dark:text-violet-300">Hello, {user?.fullName}</h2>
//         <Link href="/dashboard/create-new">
//           <Button className="px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-md">
//             + Redesign Room
//           </Button>
//         </Link>
//       </div>

//       {userRoomList?.length === 0 ? (
//         <div className="mt-16">
//           <EmptyState />
//         </div>
//       ) : (
//         <div className="mt-12">
//           <h3 className="font-semibold text-lg text-indigo-600 dark:text-violet-200 mb-6 border-b-2 pb-2 border-indigo-300 dark:border-violet-600 w-fit">
//             ✨ Your AI Room Studio
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {userRoomList.map((room, index) => (
//               <RoomDesignCard key={index} room={room} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Listing;



// "use client"
// import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs'
// import React, { useEffect, useState } from 'react'
// import EmptyState from './EmptyState';
// import Link from 'next/link';
// import { db } from '@/config/db';
// import { AiGeneratedImage } from '@/config/schema';
// import { eq } from 'drizzle-orm';
// import RoomDesignCard from './RoomDesignCard';

// function Listing() {
//     const {user} = useUser();
//     const [userRoomList, setUserRoomList] = useState([]);

//     useEffect(() => {
//       user && GetUserRoomList();
//     }, [user])

//     const GetUserRoomList = async() => {
//       const result = await db.select().from(AiGeneratedImage)
//       .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

//       setUserRoomList(result);
//       console.log(result);
//     }

//   return (
//     <div>
//       <div className='flex justify-between items-center'>
//         <h2 className='text-3xl font-bold text-indigo-600'>Hello, {user?.fullName}</h2>
//         <Link href={'/dashboard/create-new'}>
//           <Button className='px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg'>+ Redesign Room</Button>
//         </Link>
//       </div>

//       {userRoomList?.length === 0?
//         <EmptyState/>  // EmptyState
//         :
//         <div className='mt-10'>
//             <h2 className='font-medium text-primary text-xl mb-10'>AI Room Studio</h2>
//             {/* {Listing} */}
//             <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//               {userRoomList.map((room, index) => (
//                 <RoomDesignCard key={index} room={room}/>
//               ))}
//             </div>
//         </div>
//       }
//     </div>
//   )
// }

// export default Listing
