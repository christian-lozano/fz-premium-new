// import { Heart } from "lucide-react";
// import React from "react";
// import { Button } from "../ui/button";

// export default function LoveFollowNavigation() {
//   return (
//     <Button className=" z-10 hover:bg-blue-gray-600 p-0 bg-transparent  xl:px-2 px-1 py-[1px]">
//       <Heart className="w-5 h-5 xl:h-5 xl:w-5 text-black dark:text-white " />
//     </Button>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Typography,
// } from "@material-tailwind/react";
// import { CircleX, Heart } from "lucide-react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { SanitySlider } from "@/config/inventory";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// // import { ItemsFollow } from "../items-follow";
// // import { Button } from "../ui/button";
// export default function LoveFollowNavigation() {
//   const [open, setOpen] = React.useState(false);
//   const [loadingFollow, setLoadingFollow] = useState(false);
//   const [follows, setFollows] = useState();
//   const { data: session } = useSession();
//   const handleOpen = () => setOpen(!open);
//   useEffect(() => {
//     setLoadingFollow(true);
//     if (session?.user.id) {
//       client
//         .fetch<SanitySlider[]>(
//           groq`*[_type == "user" && _id match "${session?.user.id}" ][0] {
//         intereses,
//         _id
//       }`
//         )
//         .then((el) => {
//           console.log(el);

//           setFollows(el);

//           setLoadingFollow(false);
//         })
//         .catch((error) => {
//           // setLoadingFollow(false);

//           console.log(error);
//         });
//     } else {
//       console.log("error");
//     }
//   }, [session?.user.id]);
//   return (
//     <>
//       <Button
//         onClick={handleOpen}
//         className=" z-10 hover:bg-blue-gray-600 p-0 bg-transparent  xl:px-2 px-1 py-[1px]"
//       >
//         <Heart className="w-5 h-5 xl:h-5 xl:w-5 text-black dark:text-white" />

//         <span className="dark:text-white text-black mb-2 text-xs">
//           {follows?.intereses.length}
//         </span>
//       </Button>
//       <Dialog open={open} handler={handleOpen} size="lg" className="h-full ">
//         <DialogHeader className="flex w-full justify-around">
//           <div className="text-white">
//             {!session?.user.id && "  ¡Se requiere autenticación!"}
//           </div>
//           <Button onClick={handleOpen} className="absolute right-10 top-6 z-50">
//             <CircleX />
//           </Button>
//         </DialogHeader>
//         <div className="grid place-items-center gap-4 ">

//           <Typography color="black" variant="h4">
//             MI LISTA DE DESEOS
//           </Typography>
//           <span className="text-black text-xl">{follows?.length}</span>

//           {loadingFollow ? (
//             <div>cargando</div>
//           ) : (
//             <div className="overflow-y-scroll h-full h-[80vh] w-full flex flex-col items-center">
//               {follows?.intereses.map((el, i) => (
//                 <button onClick={() => setOpen(!open)} key={i}>
//                   <ItemsFollow id={follows?._id} sku={el} ind={i}></ItemsFollow>
//                  </button>
//               ))}
//               {follows?.intereses.length === 0 && (
//                 <>
//                   <p>0 ARTÍCULOS</p>
//                   <Typography className="text-center font-normal">
//                     Aún no has añadido ningún artículo a tu lista de deseos.
//                     Comienza a comprar y añade tus favoritos.
//                   </Typography>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//         {!session?.user.id && (
//           <DialogFooter className="space-x-2">
//             <div className="flex justify-evenly w-full">
//               <Link href={"/auth"}>
//                 <Button color="blue-gray" onClick={handleOpen}>
//                   Iniciar Session
//                 </Button>
//               </Link>
//               <Button color="blue-gray" onClick={handleOpen}>
//               Regístrate
//             </Button>
//             </div>
//           </DialogFooter>
//         )}
//       </Dialog>
//     </>
//   );
// }

import React from "react";

export default function LoveFollowNavigation() {
  return <div>love-follow-navigation</div>;
}
