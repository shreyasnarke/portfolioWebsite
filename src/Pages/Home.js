// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";
// import linkedin from "src\assets\images\linkedin.png"; // Replace with the actual LinkedIn icon
// import github from "src\assets\images\github.png"; // Replace with the actual GitHub icon

// function Home() {
//   const { name, tagline, img, linkedin, github } = personalDetails;
//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myImageRef = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(h11.current, { x: "-100%", delay: 0.8, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
//       .from(h12.current, { x: "-100%", delay: 0.5, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
//       .from(h13.current, { x: "-100%", delay: 0.1, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
//       .from(myImageRef.current, { x: "200%", delay: 0.5, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<");
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi,👋<br></br>My Name is<br></br>
//         </h1>
//         <h1
//           ref={h12}
//           className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {name}
//         </h1>
//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//         <div className="flex items-center mt-4">
//           {/* LinkedIn Icon */}
//           <a href={linkedin} target="_blank" rel="noopener noreferrer">
//             <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-4 cursor-pointer" />
//           </a>
//           {/* GitHub Icon */}
//           <a href={github} target="_blank" rel="noopener noreferrer">
//             <img src={github} alt="GitHub" className="w-8 h-8 cursor-pointer" />
//           </a>
//         </div>
//       </div>
//       <div className="mt-5 md:mt-0">
//         <img ref={myImageRef} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
//       </div>
//     </main>
//   );
// }

// export default Home;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
      </div>
    </main>
  );
}

export default Home;
