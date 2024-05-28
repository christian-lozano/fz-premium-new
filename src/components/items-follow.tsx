// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { urlForImage } from "@/sanity/lib/image";
// import { X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { CartItemsEmpty } from "@/components/cart-items-empty";
// import { client } from "@/sanity/lib/client";
// import { SanitySlider } from "@/config/inventory";
// import { groq } from "next-sanity";
// import { precioProduct } from "@/config/precio-product";
// import { Spinner } from "@material-tailwind/react";
// import { useRouter } from "next/navigation";

// export function ItemsFollow({ sku, id, ind }) {
//   const [follows, setFollows] = useState([]);
//   const [loadingFollow, setLoadingFollow] = useState(false);
//   const [reload, setReload] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     setLoadingFollow(true);
//     client
//       .fetch<SanitySlider[]>(
//         groq`*[_type == "product" && sku match "${sku}"][0]{
//           images,
//           name,
//           sku,
//           descuento,
//           genero,
//           priceecommerce,
//           preciomanual,
//           "slug":slug.current
//         }`
//       )
//       .then((el) => {
//         // console.log(el);

//         setFollows(el);
//         setLoadingFollow(false);
//         router.refresh();
//       })
//       .catch((error) => {
//         setLoadingFollow(false);

//         console.log(error);
//       });
//   }, [reload]);
//   //test
//   // console.log(follows);

//   const handleRemoveFolow = (sku: Number, id: Number, ind: Number) => {
//     console.log(id);
//     console.log(sku);

//     client
//       .patch(id)
//       .unset([`intereses[${ind}]`])
//       .commit()
//       .then((res) => {
//         console.log(res);
//         setReload(!reload);
//         console.log("Whole lot of stuff just happened");
//       })
//       .catch((err) => {
//         console.error("Delete failed: ", err.message);
//       });
//   };

//   return (
//     <>
//       {loadingFollow ? (
//         <div className="h-[350px] flex items-center justify-center">
//           {" "}
//           <Spinner />
//         </div>
//       ) : (
//         <div
//           role="list"
//           className="divide-y divide-gray-400 border-y border-gray-300 dark:divide-gray-800 dark:border-gray-800"
//         >
//           {/* <Link href={`/products/${follows?.slug}/${follows?.sku}`}> */}
//           <div className="flex py-6 sm:py-10 w-full">
//             <div className="shrink-0 flex justify-between items-center gap-x-5 w-full">
//               {/* <Image
//                src={urlForImage(el.image).url()}
//                 alt={"alt"}
//                            width={150}
  
//                 height={0}
//                 className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
//               /> */}
//               <img
//                 className=" rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 "
//                 src={
//                   follows?.images
//                     ? urlForImage(follows.images[0]?.asset._ref).url()
//                     : ""
//                 }
//                 width={250}
//                 height={250}
//                 alt="Polaroid camera"
//               />
//               <div className="flex flex-col items-start justify-center  w-[250px] h-[250px] ">
//                 <div>{follows?.name}</div>
//                 <div className="flex">
//                   <span className="mr-2 mt-2 font-semibold text-[#767677] line-through">
//                     S/{follows?.priceecommerce}
//                   </span>
//                   <p className="mt-2 font-semibold">
//                     S/
//                     {precioProduct(
//                       follows?.descuento,
//                       follows?.priceecommerce,
//                       follows?.preciomanual
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <button onClick={() => handleRemoveFolow(follows?.sku, id, ind)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//           {/* </Link> */}
//         </div>
//       )}
//     </>
//   );
// }
import React from 'react'

export default function Itemsfollow() {
  return (
    <div>items-follow</div>
  )
}
