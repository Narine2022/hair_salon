// src/components/Hero.jsx
// export default function Hero() {
//   return (
//     <section className="bg-[url('https://images.unsplash.com/photo-1522336572468-97b06e8ef143')] bg-cover bg-center h-[400px] flex items-center justify-center">
//       <div className="bg-black/50 text-center p-8 rounded-xl">
//         <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
//           Բարի գալուստ մեր սրահ
//         </h1>
//         <p className="text-gray-200 text-lg mb-6">
//           Գեղեցկություն և խնամք ամեն օրվա համար
//         </p>
//         <a
//           href="#services"
//           className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition"
//         >
//           Ամրագրել հիմա
//         </a>
//       </div>
//     </section>
//   );
// }


// import React from "react";


// export default function Hero() {
//   return (
//     <section className="hero">
//       <h1>Բարի գալուստ <span className="gold-text">N Gold</span> սրահ</h1>
//       <p>Գեղեցկությունը սկսվում է այստեղ ✨</p>
//       <button onClick={() => window.location.href="#services"}>Մեր ծառայությունները</button>
//     </section>
//   );
// }


// import React from "react";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <h1>
//         Բարի գալուստ <span className="gold-text">N Gold</span> սրահ
//       </h1>
//       <p>Գեղեցկությունը սկսվում է այստեղ ✨</p>
//       <button onClick={() => window.location.href = "#services"}>Մեր ծառայությունները</button>
//     </section>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <section
      style={{
       
        backgroundImage: 'url("/images/salon-hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ccc",
        textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
      }}
    >
      {/* <h1
        style={{

          fontSize: "3rem",
          background: "rgba(0,0,0,0.3)",
          padding: "15px",
          borderRadius: "20px",
        }}
      >
        Welcome to our beauty salon
      </h1> */}

<h1
  style={{
    fontFamily: "'Arial', sans-serif", // ճիշտ ձևը՝ quote-ներով, fallback ֆոնտ
    fontSize: "3rem",
    fontStyle: "italic",
    background: "rgba(0,0,0,0.3)",
    padding: "15px",
    borderRadius: "20px",
    color: "#fff",
    textAlign: "center",
  }}
>
  Welcome to our beauty salon
</h1>



    </section>
  );
}