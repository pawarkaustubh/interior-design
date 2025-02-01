import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {user} = await req.json();
    console.log('Received body:', user);// Check if body is empty or malformed
    
    try{
        //If user already exist
        const userInfo = await db.select().from(Users)
        .where(eq(Users.email, user?.primaryEmailAddress.emailAddress))
        console.log("User", userInfo);
        

        //If user doesn't exist, will add to database
        if(userInfo?.length === 0){
            const SaveResult = await db.insert(Users)
            .values({
                name: user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'Unknown User',
                email:user?.primaryEmailAddress.emailAddress,
                imageUrl:user?.imageUrl,
            }).returning({Users})

            return NextResponse.json({'result':SaveResult[0].Users})
        }
        return NextResponse.json({'result':userInfo[0]})
    }
    catch(e){
        return NextResponse.json({error:e})
    }
}