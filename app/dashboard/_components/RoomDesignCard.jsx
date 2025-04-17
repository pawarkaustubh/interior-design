import React, { useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';

function RoomDesignCard({room}) {

    const [openDialog, setOpenDialog] = useState(false);

    const onClickHandler = () => {
        console.log("Opening dialog");
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        console.log("Closing dialog");
        setOpenDialog(false);
    }

  return (
    <div className='shadow-md rounded-md cursor-pointer' onClick={onClickHandler}>
      <ReactBeforeSliderComponent
        firstImage={{
            imageUrl: room?.aiImage
        }}
        secondImage={{
            imageUrl: room?.orgImage
        }}
      />
      <div className='p-4'>
        <h2> Room Type : {room.roomType}</h2>
        <h2> Design type : {room.designType}</h2>
      </div>

      <AiOutputDialog 
        aiImage={room.aiImage} 
        orgImage={room.orgImage}
        closeDialog={handleCloseDialog}
        openDialog={openDialog}
      />
    </div>
  )
}

export default RoomDesignCard
