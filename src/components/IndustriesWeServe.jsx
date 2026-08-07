// import React from 'react'
// import manufacturing from "../assets/Industries/manufacturing.png";
// import logistics from "../assets/Industries/logistics.png";
// import construction from "../assets/Industries/construction.png";
// import transportation from "../assets/Industries/transportation.png";
// import hospitality from "../assets/Industries/hospitality.png";
// import agriculture from "../assets/Industries/agriculture.png";
// import maintenance from "../assets/Industries/maintenance.png";


// const industriesWeServe = [
//   {
//     title: "Manufacturing",
//     image: manufacturing,
//     description:
//       "Supporting industrial operations with skilled and reliable workforce solutions. We provide manpower for production, assembly, quality control, machine operations, and factory support roles to improve efficiency and productivity."
//   },

//   {
//     title: "Logistics & Warehousing",
//     image: logistics,
//     description:
//       "Providing workforce solutions for supply chain operations including inventory management, packing, material handling, storage, and distribution activities to ensure smooth business operations."
//   },

//   {
//     title: "Construction & Infrastructure",
//     image: construction,
//     description:
//       "Delivering experienced manpower for construction projects, infrastructure development, and industrial works. Our workforce supports skilled trades, equipment operations, and site activities."
//   },

//   {
//     title: "Transportation & Logistics",
//     image: transportation,
//     description:
//       "Helping transportation companies maintain efficient operations with trained professionals for fleet management, driving, delivery support, and logistics services."
//   },

//   {
//     title: "Hospitality",
//     image: hospitality,
//     description:
//       "Providing dedicated professionals for hotels, resorts, restaurants, and service industries. Our workforce supports guest services, housekeeping, food and beverage operations."
//   },

//   {
//     title: "Agriculture",
//     image: agriculture,
//     description:
//       "Supporting agricultural businesses with dependable workforce solutions for farming, harvesting, processing, and seasonal operational requirements."
//   },

//   {
//     title: "Maintenance & Engineering",
//     image: maintenance,
//     description:
//       "Providing skilled technicians and engineering professionals for equipment maintenance, technical operations, repairs, and industrial support services."
//   }
// ];


// export default function IndustriesWeServe() {

//   return (

//     <section className="bg-white py-20 px:5 md:px-8">

//       {/* Heading */}

//       <div className="max-w-7xl mx-auto px-6 text-center mb-16">

//         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//           Industries We Serve
//         </h2>

//         <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
//           Delivering skilled workforce solutions across diverse industries
//           with reliable manpower and professional expertise.
//         </p>

//       </div>


//       {/* Industries */}

//       <div className="max-w-7xl mx-auto px-6 space-y-24">


//         {
//           industriesWeServe.map((industry,index)=>(


//             <div
//               key={index}
//               className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16
//               ${
//                 index % 2 !== 0
//                 ? "lg:flex-row-reverse"
//                 : ""
//               }`}>


//               {/* Image */}
//                {/* <div className="w-full lg:w-1/2 overflow-hidden rounded-xl hidden lg:block">

//                 <img

//                   src={industry.image}

//                   alt={industry.title}

//                   className=" w-full h-[420px] object-cover transition-transform
//                   duration-700 hover:scale-110 sticky"/>
//               </div>  */}

//               <div className="sticky top-[var(--space-sm)] origin-[center_top]">
//   <img
//     src={industry.image}
//     alt={industry.title}
//     className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-110"
//   />
// </div>

//               {/* Content */}
//               <div className="w-full lg:w-1/2">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-5">
//                   {industry.title}
//                   </h3>

//                 <p  className=" text-gray-600 text-lg leading-8">
//                    {industry.description}
//                 </p>

//               </div>

//             </div>
//           ))
//         }

//       </div>

//     </section>

//   );
// }



import React from "react";

import manufacturing from "../assets/Industries/manufacturing.png";
import logistics from "../assets/Industries/logistics.png";
import construction from "../assets/Industries/construction.png";
import transportation from "../assets/Industries/transportation.png";
import hospitality from "../assets/Industries/hospitality.png";
import agriculture from "../assets/Industries/agriculture.png";
import maintenance from "../assets/Industries/maintenance.png";

const industriesWeServe = [
  {
    title: "Manufacturing",
    image: manufacturing,
    description:
      "Supporting industrial operations with skilled and reliable workforce solutions. We provide manpower for production, assembly, quality control, machine operations, and factory support roles to improve efficiency and productivity.",
  },

  {
    title: "Logistics & Warehousing",
    image: logistics,
    description:
      "Providing workforce solutions for supply chain operations including inventory management, packing, material handling, storage, and distribution activities to ensure smooth business operations.",
  },

  {
    title: "Construction & Infrastructure",
    image: construction,
    description:
      "Delivering experienced manpower for construction projects, infrastructure development, and industrial works. Our workforce supports skilled trades, equipment operations, and site activities.",
  },

  {
    title: "Transportation & Logistics",
    image: transportation,
    description:
      "Helping transportation companies maintain efficient operations with trained professionals for fleet management, driving, delivery support, and logistics services.",
  },

  {
    title: "Hospitality",
    image: hospitality,
    description:
      "Providing dedicated professionals for hotels, resorts, restaurants, and service industries. Our workforce supports guest services, housekeeping, food and beverage operations.",
  },

  {
    title: "Agriculture",
    image: agriculture,
    description:
      "Supporting agricultural businesses with dependable workforce solutions for farming, harvesting, processing, and seasonal operational requirements.",
  },

  {
    title: "Maintenance & Engineering",
    image: maintenance,
    description:
      "Providing skilled technicians and engineering professionals for equipment maintenance, technical operations, repairs, and industrial support services.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="bg-white px-4 py-20 ">

      {/* HEADING */}

      <div className="mx-auto mb-20 max-w-7xl px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
          Industries We Serve
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Delivering skilled workforce solutions across diverse industries
          with reliable manpower and professional expertise.
        </p>

      </div>


      {/* INDUSTRIES */}

      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {industriesWeServe.map((industry, index) => (

          <div
            key={industry.title}

            className={`sticky top-[80px] mb-10 flex min-h-[600px] flex-col
               overflow-hidden rounded-3xl bg-white shadow-xl 
               lg:min-h-[520px] lg:flex-row lg:items-center lg:gap-16
             ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} `}
            style={{
              zIndex: index + 1,
            }}
          >

            {/* IMAGE*/}

            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-[280px] w-full object-cover md:h-[350px]
                   lg:h-[420px] lg:rounded-2xl"/>
              </div>
            </div>


            {/* =========================
                CONTENT
            ========================== */}

            <div className="w-full flex-1 p-6 md:p-8 lg:w-1/2 lg:p-0">
              {/* Title */}

              <h3 className="mb-4 text-2xl text-center font-bold
               text-slate-900 md:text-3xl lg:text-4xl">
                {industry.title}
              </h3>

              <p className="text-base leading-7 p-6 text-gray-600 md:text-lg md:leading-8">
                {industry.description}
              </p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

