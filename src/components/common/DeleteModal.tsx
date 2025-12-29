// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// // import { useDeleteRastaurantMutation } from "@/redux/features/restaurant/rastaurant.api";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { toast } from "sonner";

// interface DeleteModalProps {
//   id: string;
//   type: "restaurent" | "user";
//   btn: "icon" | "btn";
// }

// const DeleteModal = ({ id, type, btn }: DeleteModalProps) => {
//   const [open, setOpen] = useState(false);
// //   const [deletRestaurant] = useDeleteRastaurantMutation();
//   const router = useRouter();

//   const handleDelete = async () => {
//     const toastId = toast.loading(`Deleting...`);
//     try {
//       let res;
//       if (type === "restaurent") {
//         // res = await deletRestaurant(id).unwrap();
//       } else if (type === "user") {
//         // res = await deleteCause(id).unwrap();
//       }

//       if (res.data) {
//         toast.success("Deleted Successfully", { id: toastId });
//         setOpen(false);
//         router.push("/");
//       } else {
//         toast.error(res?.error?.data?.message || "Failed to Delete", {
//           id: toastId,
//         });
//         setOpen(false);
//       }
//     } catch (err: any) {
//       toast.error(err?.data?.message || `Failed to delete ${type}`, {
//         id: toastId,
//       });
//     }
//   };
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       {btn === "icon" ? (
//         <DialogTrigger className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
//           <RiDeleteBinLine className="text-xl text-red-500" />
//         </DialogTrigger>
//       ) : (
//         <DialogTrigger className="gradient-border md:w-2/5">
//           <div className="content">Delete</div>
//         </DialogTrigger>
//       )}

//       <DialogContent className="max-w-[450px] !rounded-3xl [&>button]:hidden">
//         <DialogHeader>
//           <DialogTitle>
//             <div className="flex flex-col justify-center items-center gap-5 text-center">
//               <h3 className="text-xl font-medium">
//                 Are you sure you want to proceed?
//               </h3>
//               <div className="flex md:gap-5 gap-3">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="bg-red-500 py-2 px-6 rounded-lg"
//                 >
//                   Cancle
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-green-500 py-2 px-6 rounded-lg"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </DialogTitle>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default DeleteModal;