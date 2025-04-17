import React from "react";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
  if (!openDialog) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Result:</h2>
          <p className="text-sm text-gray-500">
            This is a comparison between your original room image and the AI-redesigned version.
          </p>
        </div>

        <ReactBeforeSliderComponent
          firstImage={{
              imageUrl: aiImage
          }}
          secondImage={{
              imageUrl: orgImage
          }}
        />

        <div className="mt-4 flex justify-end">
          <Button onClick={(e) => {
            e.stopPropagation();
            closeDialog();
          }}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export default AiOutputDialog;
