import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {

    const Designs = [
        {
            name:'Modern',
            image:'/modern.png'
        },
        {
            name:'Industrial',
            image:'/industrial.png'
        },
        {
            name:'Bohemian',
            image:'/bohemian.png'
        },
        {
            name:'Traditional',
            image:'/traditional.png'
        },
        {
            name:'Rustic',
            image:'/rustic.png'
        },
        {
            name:'Minimalist',
            image:'/minimalist.png'
        } 
    ]

    const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="mt-5">
      <label className="text-gray-500 text-lg font-medium">Select Interior Design Type</label>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Designs.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }}
            className={`flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer transition-all ${
              design.name === selectedOption
                ? 'bg-primary/10 border-2 border-primary scale-105 shadow-lg'
                : 'border border-gray-200 hover:shadow-md'
            }`}
            style={{ height: '180px', width: '140px' }} // Adjusted box size
          >
            <div
              className={`w-full h-[120px] flex items-center justify-center overflow-hidden rounded-md ${
                design.name === selectedOption ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Image
                src={design.image}
                alt={`Interior design type: ${design.name}`}
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <h2
              className={`mt-2 text-center text-sm font-medium ${
                design.name === selectedOption ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {design.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignType



// <div className='mt-5'>
    //   <label className='text-gray-500'>Select Interior Design type</label>
    //   <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    //     {Designs.map((design, index) => (
    //         <div key={index} onClick={() => {setSelectedOption(design.name);selectedDesignType(design.name)}}>
    //             <Image src={design.image} alt={`Interior design type: ${design.name}`} width={100} height={100}
    //             className={`h-[70px] rounded-md hover:scale-105 
    //             transition-all cursor-pointer ${design.name === selectedOption && 'border-2 border-primary rounded-md p-1'}`}/>
    //             <h2>{design.name}</h2>
    //         </div>
    //     ))}
    //   </div>
    // </div>