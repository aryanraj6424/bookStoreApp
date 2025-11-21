import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className=" ">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;


// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="flex justify-center items-center p-2 mt-4">
//         <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl">
//           <figure className="px-4 pt-4">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="rounded-xl object-contain w-full h-56 sm:h-64 bg-white"
//             />
//           </figure>

//           <div className="card-body items-start text-left p-4">
//             <h2 className="card-title text-lg sm:text-xl font-semibold">
//               {item.name}
//               <div className="badge badge-secondary text-sm sm:text-base ml-2">
//                 {item.category}
//               </div>
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600">{item.title}</p>

//             <div className="card-actions justify-between w-full mt-2">
//               <div className="badge badge-outline border-black text-gray-800 text-sm sm:text-base">
//                 ${item.price}
//               </div>
//               <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer text-sm sm:text-base">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
