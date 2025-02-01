"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file, setFile] = useState();
    const onFileSelected = (event) => {
        console.log(event.target.files[0]);
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            selectedImage(selectedFile);
        }
    }

  return (
    <div className="flex flex-col items-center w-full">
      <label className="text-lg font-medium text-gray-700 mb-3">
        Select an Image for Your Room
      </label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`border rounded-xl border-dotted flex flex-col items-center justify-center 
            border-indigo-500 bg-indigo-50 cursor-pointer hover:shadow-lg
            transition-all duration-200 overflow-hidden 
            ${file ? 'p-0 w-[300px] h-[300px]' : 'p-24'}`}
          >
            {!file ? (
              <>
                <Image
                  src={'/imageupload.png'}
                  alt="Upload an image"
                  width={70}
                  height={70}
                  priority
                />
                <p className="mt-2 text-indigo-600 font-medium text-sm">
                  Upload Image
                </p>
              </>
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview of uploaded image"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: 'none' }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  )
}

export default ImageSelection
