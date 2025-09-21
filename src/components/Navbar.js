// src/components/Navbar.jsx
// import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <header className="w-full shadow-md bg-white">
//       <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
//         {/* Logo */}
//         <div className="text-2xl font-bold text-yellow-500">N</div>

//         {/* Navigation */}
//         <nav className="flex gap-6 text-gray-700 font-medium">
//           <a href="#services" className="hover:text-yellow-500">Ծառայություններ</a>
//           <a href="#about" className="hover:text-yellow-500">Մեր մասին</a>
//           <a href="#admin" className="hover:text-yellow-500">Ադմին</a>
//           <a href="#login" className="hover:text-yellow-500">Մուտք</a>
//         </nav>

//         {/* Right corner */}
//         <div className="flex items-center gap-6">
//           {/* Working hours */}
//           <span className="text-sm text-gray-600">🕒 08:30 - 21:30</span>

//           {/* Social icons */}
//           <div className="flex gap-3 text-yellow-500 text-xl">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer">
//               <FaFacebook />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer">
//               <FaInstagram />
//             </a>
//             <a href="https://tiktok.com" target="_blank" rel="noreferrer">
//               <FaTiktok />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



// import React from "react";
// import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
// import "./App.css";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       {/* Լոգո */}
//       <div className="logo">N Gold</div>

//       {/* Մենյու */}
//       <nav className="nav-links">
//         <a href="#services">Ծառայություններ</a>
//         <a href="#about">Մեր մասին</a>
//         <a href="#admin">Ադմին</a>
//         <a href="#login">Մուտք</a>
//       </nav>

//       {/* Աջ կողմ — սոցիալական + ժամեր */}
//       <div className="right-section">
//         <div className="work-time">⏰ 08:30 - 21:30</div>
//         <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebook size={20} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram size={20} />
//           </a>
//           <a href="https://tiktok.com" target="_blank" rel="noreferrer">
//             <FaTiktok size={20} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React from "react";
// import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


// export default function Navbar({ setPage, goToAdmin, role, handleLogout }) {
//   return (
//     <header className="navbar">
//       {/* Լոգո */}
//       <div className="logo">N </div>

//       {/* Մենյու */}
//       <nav className="nav-links">
//         <button onClick={() => setPage("booking")}>Ծառայություններ</button>
//         <button onClick={() => setPage("about")}>Մեր մասին</button>
//         <button onClick={goToAdmin}>Ադմին</button>

//         {!role && <button onClick={() => setPage("login")}>Մուտք</button>}
//         {role && (
//           <button onClick={handleLogout}>Ելք ({role})</button>
//         )}
//       </nav>

//       {/* Աջ կողմ — սոցիալական + ժամեր */}
//       <div className="right-section">
//         <div className="work-time">⏰ 08:30 - 21:30</div>
//         <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebook size={20} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram size={20} />
//           </a>
//           <a href="https://tiktok.com" target="_blank" rel="noreferrer">
//             <FaTiktok size={20} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React from "react";
// import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


// export default function Navbar({ setPage, role , onLogout }) {
//   return (
//     <header className="navbar">
//       {/* Լոգո */}
//       <div className="logo">N Gold</div>

//       {/* Մենյու */}
//       <nav className="nav-links">
//         <button onClick={() => setPage("home")}>Ծառայություններ</button>
//         <button onClick={() => setPage("blog")}>Մեր մասին</button>
//         {role === "admin" && (
//           <button onClick={() => setPage("admin")}>Ադմին</button>
//         )}
//         {!role ? (
//           <button onClick={() => setPage("login")}>Մուտք</button>
//         ) : (
//           <button onClick={onLogout}>Ելք</button>
//         )}
//       </nav>

//       {/* Աջ կողմ */}
//       <div className="right-section">
//         <div className="work-time">⏰ 08:30 - 21:30</div>
//         <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebook size={20} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram size={20} />
//           </a>
//           <a href="https://tiktok.com" target="_blank" rel="noreferrer">
//             <FaTiktok size={20} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }


// import React from "react";
// import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

// export default function Navbar({ setPage, role, onLogout }) {
//   return (
//     <header className="navbar">
//       {/* Լոգո */}
//       <div className="logo">N Gold</div>

//       {/* Մենյու */}
//       <nav className="nav-links">
//         <button onClick={() => setPage("home")}>Ծառայություններ</button>
//         <button onClick={() => setPage("blog")}>Մեր մասին</button>
//         {role === "admin" && <button onClick={() => setPage("admin")}>Ադմին</button>}
//         {!role ? (
//           <button onClick={() => setPage("login")}>Մուտք</button>
//         ) : (
//           <button onClick={onLogout}>Ելք</button>
//         )}
//       </nav>

//       {/* Աջ կողմ */}
//       <div className="right-section">
//         <div className="work-time">⏰ 08:30 - 21:30</div>
//         <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebook size={20} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram size={20} />
//           </a>
//           <a href="https://tiktok.com" target="_blank" rel="noreferrer">
//             <FaTiktok size={20} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }


// import React from "react";

// export default function Navbar({ setPage }) {
//   return (
//     <nav
//       style={{
//         background: "#333",
//         color: "#fff",
//         padding: "15px",
//         display: "flex",
//         justifyContent: "space-around",
//       }}
//     >
//       <h2 style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
//         💇‍♀️ Hair Salon
//       </h2>
//       <div>
//         <button
//           onClick={() => setPage("home")}
//           style={btnStyle}
//         >
//           Գլխավոր
//         </button>
//         <button
//           onClick={() => setPage("admin")}
//           style={btnStyle}
//         >
//           Admin
//         </button>
//         <button
//           onClick={() => setPage("login")}
//           style={btnStyle}
//         >
//           Մուտք
//         </button>
//       </div>
//     </nav>
//   );
// }

// const btnStyle = {
//   marginLeft: "10px",
//   background: "#FFD700",
//   border: "none",
//   borderRadius: "5px",
//   padding: "8px 15px",
//   cursor: "pointer",
// };



// import React from "react";

// export default function Navbar({ setPage }) {
//   return (
//     <nav
//       style={{
//         background: "#333",
//         color: "#fff",
//         padding: "15px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       {/* Լոգո հատված */}
//       <div
//         onClick={() => setPage("home")}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           cursor: "pointer",
//           gap: "10px",
//         }}
//       >
//         <img
//           src="/images/logo.png"  // <-- ձեր պատկերների public պանակում գտնվի այս նկարը
//           alt="Hair Salon Logo"
//           style={{ width: "100px", height: "100px", objectFit: "cover" ,  borderRadius: "82px"}}
//         />
//         {/* <h2 style={{ margin: 0, color: "#fff" }}></h2> */}
//       </div>

//       {/* Բուսթոններ */}
//       <div>
//         <button onClick={() => setPage("home")} style={btnStyle}>
//           Գլխավոր
//         </button>
//         <button onClick={() => setPage("admin")} style={btnStyle}>
//           Admin
//         </button>
//         <button onClick={() => setPage("login")} style={btnStyle}>
//           Մուտք
//         </button>
//       </div>
//     </nav>
//   );
// }

// const btnStyle = {
//   marginLeft: "10px",
//   background: "#FFD700",
//   border: "none",
//   borderRadius: "5px",
//   padding: "8px 15px",
//   cursor: "pointer",
// };





import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Navbar({ setPage }) {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com" },
  ];

  return (
    <nav
      style={{
        background: "#333",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Լոգո հատված */}
      <div
        onClick={() => setPage("home")}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: "10px",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Hair Salon Logo"
          style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "82px" }}
        />
      </div>

      {/* Navigation + Social */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        {/* Social icons վերևում */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "5px", fontSize: "16px" }}>
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{


                color: hovered === i ? "#FFD700" : "#fff",
                transform: hovered === i ? "scale(1.2)" : "scale(1)",
                transition: "all 0.2s",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Navigation buttons */}
        <div>
          <button onClick={() => setPage("home")} style={btnStyle}>Main</button>
          <button onClick={() => setPage("admin")} style={btnStyle}>Admin</button>
          <button onClick={() => setPage("login")} style={btnStyle}>Log in</button>
        </div>
      </div>
    </nav>
  );
}

const btnStyle = {
  marginLeft: "10px",
  background: "#FFD700",
  border: "none",
  borderRadius: "5px",
  padding: "8px 15px",
  cursor: "pointer",
  transition: "transform 0.2s",
};
