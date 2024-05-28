import React from 'react'

export default function LoveLollow() {
  return (
    <div>love-follow</div>
  )
}



// "use client";
// import { Heart } from "lucide-react";

// import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import { client } from "@/sanity/lib/client";
// import { SanitySlider } from "@/config/inventory";
// import { groq } from "next-sanity";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { Spinner } from "@material-tailwind/react";

// export default function LoveFollow({ product }) {
//   let router = useRouter();
//   const { data: session } = useSession();
//   const [loadingFollow, setLoadingFollow] = useState(false);
//   const [follows, setFollows] = useState();

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
//           let result = el.intereses?.find((el) => el === product?.sku);
//           setFollows(result);
//           setLoadingFollow(false);
//         })
//         .catch((error) => {
//           // setLoadingFollow(false);

//           console.log(error);
//         });
//     } else {
//       console.log("error");
//     }
//   }, [session?.user.id, follows, product.sku]);

//   //   console.log(session?.user.id);
//   const handlerLove = async () => {
//     setLoadingFollow(true);
//     if (session?.user.id) {
//       // let result = user.find((el) => el._id === session?.user.id);
//       // console.log(result);
//       // console.log(session?.user.id);

//       client
//         .patch(session?.user.id)
//         // Ensure that the `reviews` arrays exists before attempting to add items to it
//         .setIfMissing({ intereses: [] })
//         .append("intereses", [product.sku])
//         .commit({ autoGenerateArrayKeys: true })
//         .then((resultad) => {
//           console.log(resultad);
//           let result = resultad.intereses?.find((el) => el === product?.sku);
//           setFollows(result);
//           setLoadingFollow(false);
//         });
//     } else {
//       router.push("/auth");
//       setLoadingFollow(false);
//     }
//   };

//   return (
//     <Button
//       onClick={handlerLove}
//       className="absolute left-5 top-5 z-10  bg-transparent "
//     >
//       {loadingFollow ? (
//         <Spinner />
//       ) : (
//         <Heart
//           className={`w-5 h-5 xl:h-auto xl:w-auto ${
//             follows === product.sku && "text-red-900 fill-red-900"
//           }`}
//         />
//       )}
//     </Button>
//   );
// }
