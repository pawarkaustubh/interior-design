import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="rounded-lg shadow-lg p-6 bg-gray-100 text-center">
        <AlertDialogHeader>
          <AlertDialogTitle className="sr-only">Loading</AlertDialogTitle> {/* Hidden title for accessibility */}
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col items-center">
          <Image
            src={"/loading.gif"}
            alt="Loading animation"
            width={100}
            height={100}
            unoptimized
            className="mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700">
            Redesigning your Room ...
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Do not refresh or close this page.
          </p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;






// import React from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import Image from "next/image";

// function CustomLoading({loading}) {
//   return (
//     <AlertDialog open={loading}>
//       <AlertDialogContent>
//         <div className="bg-white flex flex-col items-center my-10 justify-center">
//             <Image src={'/loading1.gif'} alt='loaging' width={100} height={100}/>
//         </div>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default CustomLoading;
