import React, { useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';

function RoomDesignCard({ room }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onClickHandler = () => {
    console.log("Opening dialog");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    console.log("Closing dialog");
    setOpenDialog(false);
  };

  return (
    <>
      <div
        className={`rounded-xl border overflow-hidden cursor-pointer transition-all duration-300
          ${isHovered && !openDialog ? 'scale-[1.03] border-indigo-600 shadow-lg bg-indigo-50 dark:bg-violet-950' : 'border-gray-200 dark:border-gray-700 shadow-sm'}
        `}
        onClick={onClickHandler}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ReactBeforeSliderComponent
          firstImage={{ imageUrl: room?.aiImage }}
          secondImage={{ imageUrl: room?.orgImage }}
        />

        <div className="p-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-400">
          <h2 className={`${isHovered && !openDialog ? 'text-indigo-600 dark:text-violet-400' : ''}`}>
            Room Type: {room.roomType}
          </h2>
          <h2 className={`${isHovered && !openDialog ? 'text-indigo-600 dark:text-violet-400' : ''}`}>
            Design Type: {room.designType}
          </h2>
        </div>
      </div>

      <AiOutputDialog
        aiImage={room.aiImage}
        orgImage={room.orgImage}
        closeDialog={handleCloseDialog}
        openDialog={openDialog}
      />
    </>
  );
}

export default RoomDesignCard;


// import React, { useState } from 'react'
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';
// import AiOutputDialog from './AiOutputDialog';

// function RoomDesignCard({room}) {

//     const [openDialog, setOpenDialog] = useState(false);

//     const onClickHandler = () => {
//         console.log("Opening dialog");
//         setOpenDialog(true);
//     }

//     const handleCloseDialog = () => {
//         console.log("Closing dialog");
//         setOpenDialog(false);
//     }

//   return (
//     <div className='shadow-md rounded-md cursor-pointer' onClick={onClickHandler}>
//       <ReactBeforeSliderComponent
//         firstImage={{
//             imageUrl: room?.aiImage
//         }}
//         secondImage={{
//             imageUrl: room?.orgImage
//         }}
//       />
//       {/* className='p-4' */}
//       <div className="p-4 text-sm text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-violet-400 transition-colors duration-300">
//         <h2>Room Type : {room.roomType}</h2>
//         <h2>Design Type : {room.designType}</h2>
//       </div>


//       <AiOutputDialog 
//         aiImage={room.aiImage} 
//         orgImage={room.orgImage}
//         closeDialog={handleCloseDialog}
//         openDialog={openDialog}
//       />
//     </div>
//   )
// }

// export default RoomDesignCard
