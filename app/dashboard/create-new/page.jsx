"use client"
import React, { useContext, useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseConfig'
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_components/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { db } from '@/config/db'
import { Users } from '@/config/schema'

function CreateNew() {

  const {user} = useUser();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiOutputImage, setAiOutputImage] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [orgImage, setOrgImage] = useState();
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  // const [outputResult, setOutputResult] = useState();

  const onHandleInputChange=(value, fieldName)=>{
    setFormData(prev => ({
      ...prev,
      [fieldName]:value
    }))
    console.log(formData);
  }

  const GenerateAiImage = async() => {
    setLoading(true);
    const rawImageUrl = await SaveRawImageToFirebase();
    const result = await axios.post('/api/redesign-room', {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress?.emailAddress
    });
    console.log(result.data);
    await updateUserCredits();
    setAiOutputImage(result.data.result);  // Output image URL
    setOpenOutputDialog(true);
    setLoading(false);

  }

  const SaveRawImageToFirebase = async() => {
    //Save raw file image ti firebase
    const fileName = Date.now() + "_raw.png";
    const imageRef = ref(storage, 'room-redesign/' + fileName);

    await uploadBytes(imageRef, formData.image).then(resp => {
      console.log('File Uploaded...')
    })

    //Uploaded file image URL
    const downloadUrl = await getDownloadURL(imageRef);
    console.log(downloadUrl);
    setOrgImage(downloadUrl);
    return downloadUrl;
  }

  // Update the user credits
  const updateUserCredits = async() => {
    const result = await db.update(Users)
    .set({
      credits: userDetail?.credits - 1,
    }).returning({id: Users.id});

    if(result){
      setUserDetail(prev => ({
        ...prev,
        credits: userDetail?.credits - 1
      }))
      return result[0].id
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6 md:p-10 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center leading-snug break-words overflow-hidden">
        Experience the Magic of AI Remodeling ✨
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl break-words">
        Transform any room with just a click! Select your space, choose a style, and let AI instantly reimagine your environment into something extraordinary.
      </p>
                                                                      {/* gap-10 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full max-w-5xl">
        {/* {Image selection} */}
        <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')}/>
        {/* {Form input section} */}
        <div className="flex flex-col gap-4">
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')}/>
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')}/>
          <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />
          <Button className="w-full mt-5" onClick={GenerateAiImage}>Generate</Button>
          <p className="text-sm text-gray-500">NOTE: 1 Credit will be used to redesign your room</p>
        </div>
      </div>
      <CustomLoading loading={loading} />
      <AiOutputDialog openDialog={openOutputDialog}
      closeDialog={() => setOpenOutputDialog(false)}
      orgImage={orgImage}
      aiImage={aiOutputImage} 
      />
    </div>
  )
}

export default CreateNew

    //<div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-6 md:p-10 bg-gray-50">
    //   <h2 className="text-4xl font-extrabold text-indigo-600 text-center leading-snug">
    //     Experience the Magic of AI Remodeling ✨
    //   </h2>
    //   <p className="text-center text-gray-600 mt-4 max-w-2xl">
    //     Transform any room with just a click! Select your space, choose a style, and let AI instantly reimagine your environment into something extraordinary.
    //   </p>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full max-w-5xl">
    //     {/* {Image selection} */}
    //     <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')}/>
    //     {/* {Form input section} */}
    //     <div>
    //       {/* Room Type */}
    //       <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')}/>
    //       {/* Design type */}
    //       <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')}/>
    //       {/* Additional Requirement TextArea (Optional) */}
    //       <AdditionalReq additionalRequirementInput = {(value) => onHandleInputChange(value, 'additionalReq')} />
    //       {/* Button to generate Image */}
    //       <Button className="w-full mt-5">Generate</Button>
    //       <p className='text-sm text-gray-500 mb-52'>NOTE: 1 Credit will use to redesign your room</p>
    //     </div>
    //   </div>
    // </div>
