import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Result:</AlertDialogTitle>
          {/* ✅ Accessibility description */}
          <AlertDialogDescription>
            This is a comparison between your original room image and the AI-redesigned version.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Slider should not be in the header */}
        <ReactBeforeSliderComponent
          firstImage={{
              imageUrl: aiImage
          }}
          secondImage={{
              imageUrl: orgImage
          }}
        />

        <AlertDialogFooter>
          <Button onClick={() => closeDialog(false)}>Close</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AiOutputDialog;
