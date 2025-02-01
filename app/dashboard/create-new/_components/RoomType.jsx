import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoomType({ selectedRoomType }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">
        Select Room Type
      </label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full border border-gray-300 rounded-md shadow-sm bg-white hover:border-indigo-700 focus:ring focus:ring-indigo-300 transition-all">
          <SelectValue placeholder="Choose a Room Type" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-300 shadow-lg rounded-md mt-1">
          <SelectItem
            value="Living Room"
            className="py-2 px-3 hover:bg-indigo-100 cursor-pointer rounded-md transition-all"
          >
            Living Room
          </SelectItem>
          <SelectItem
            value="Bedroom"
            className="py-2 px-3 hover:bg-indigo-100 cursor-pointer rounded-md transition-all"
          >
            Bedroom
          </SelectItem>
          <SelectItem
            value="Kitchen"
            className="py-2 px-3 hover:bg-indigo-100 cursor-pointer rounded-md transition-all"
          >
            Kitchen
          </SelectItem>
          <SelectItem
            value="Office"
            className="py-2 px-3 hover:bg-indigo-100 cursor-pointer rounded-md transition-all"
          >
            Office
          </SelectItem>
          <SelectItem
            value="Bathroom"
            className="py-2 px-3 hover:bg-indigo-100 cursor-pointer rounded-md transition-all"
          >
            Bathroom
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;



// <div>
    //   <label className="text-slate-400">Select Room Type</label>
    //   <Select onValueChange={(value) => selectedRoomType(value)}>
    //     <SelectTrigger className="w-full">
    //       <SelectValue placeholder="Room Type" />
    //     </SelectTrigger>
    //     <SelectContent>
    //       <SelectItem value="Living Room">Living Room</SelectItem>
    //       <SelectItem value="Bedroom">Bedroom</SelectItem>
    //       <SelectItem value="Kitchen">Kitchen</SelectItem>
    //       <SelectItem value="Office">Office</SelectItem>
    //       <SelectItem value="Bathroom">Bathroom</SelectItem>
    //     </SelectContent>
    //   </Select>
    // </div>
