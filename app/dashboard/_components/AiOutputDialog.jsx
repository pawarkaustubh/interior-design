import React from "react";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
  if (!openDialog) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="bg-white dark:bg-[#1e1b4b] p-6 md:p-8 rounded-2xl shadow-2xl w-[90%] max-w-2xl border-2 border-indigo-400 dark:border-violet-600 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-[#4c1d95] dark:text-violet-100">AI Room Redesign</h2>
          <p className="text-sm text-gray-600 dark:text-violet-300 mt-1">
            Slide to compare your original room image with the AI-generated redesign.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border-2 border-indigo-300 dark:border-violet-700 shadow-md">
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: aiImage,
            }}
            secondImage={{
              imageUrl: orgImage,
            }}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              closeDialog();
            }}
            className="bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-700 hover:to-indigo-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AiOutputDialog;



// import React from "react";
// import { Button } from "@/components/ui/button";
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';

// function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
//   if (!openDialog) return null;
  
//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
//       <div className="bg-white p-6 rounded-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
//         <div className="mb-4">
//           <h2 className="text-xl font-bold">Result:</h2>
//           <p className="text-sm text-gray-500">
//             This is a comparison between your original room image and the AI-redesigned version.
//           </p>
//         </div>

//         <ReactBeforeSliderComponent
//           firstImage={{
//               imageUrl: aiImage
//           }}
//           secondImage={{
//               imageUrl: orgImage
//           }}
//         />

//         <div className="mt-4 flex justify-end">
//           <Button onClick={(e) => {
//             e.stopPropagation();
//             closeDialog();
//           }}>Close</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AiOutputDialog;
