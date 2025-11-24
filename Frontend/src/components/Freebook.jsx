
// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// // import list from "../../public/list.json";
// // const Freebook = () => {
// //   const filterData = list.filter((data) => data.category === "Free");

// const Freebook = () => {
//   const [filterData, setFilterData] = useState([]);

//   // public folder se JSON fetch karna
//   useEffect(() => {
//     fetch("/list.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const freeItems = data.filter((item) => item.category === "Free");
//         setFilterData(freeItems);
//       })
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);



//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <>
//       <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2"> Free Offered Course</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
//             impedit magni aspernatur? Voluptatum, ducimus voluptates nobis modi
//             odio error enim dolor nostrum, id quas dolorum itaque perferendis
//             assumenda debitis minus!
//           </p>
//         </div>
      

//       <div>
//         <Slider {...settings}>
//           {filterData.map((item)=>(
//             <Cards item={item} key={item.id}/>
//           ))}
//         </Slider>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Freebook;



// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Cards from "./Cards"; // <-- ensure ye component import ho

// const Freebook = () => {
//   const [filterData, setFilterData] = useState([]);

//   // ✅ public folder se JSON fetch karna
//   useEffect(() => {
//     fetch("/list.json") // no need to write /public/list.json
//       .then((response) => response.json())
//       .then((data) => {
//         const freeItems = data.filter((item) => item.category === "Free");
//         setFilterData(freeItems);
//       })
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   // ✅ Slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
//             impedit magni aspernatur? Voluptatum, ducimus voluptates nobis modi
//             odio error enim dolor nostrum, id quas dolorum itaque perferendis
//             assumenda debitis minus!
//           </p>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {filterData.map((item)=>(
//             <Cards item={item} key={item.id}/>
//           ))}
//         </Slider>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Freebook;









import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {

  const [book, setBook] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // const [theme, setTheme] = useState("light");
  // <button onClick={()=>setTheme("")  }></button>
  // <p>{theme}</p>

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);

        // 🔥 Backend ke data me se Free category filter
        const freeCourses = res.data.filter((item) => item.category === "Free");
        setFilterData(freeCourses);

      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit
            magni aspernatur? Voluptatum, ducimus voluptates nobis modi odio error
            enim dolor nostrum, id quas dolorum itaque perferendis assumenda debitis
            minus!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
