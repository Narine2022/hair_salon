// import { useState } from "react";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import "./App.css";

// export default function App() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [page, setPage] = useState("booking"); // booking, admin, login
//   const [role, setRole] = useState(localStorage.getItem("role")); // STATE

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null); // RESET STATE
//     setPage("booking");
//   };

//   const goToAdmin = () => {
//     if (role === "admin") {
//       setPage("admin");
//     } else if (role === "user") {
//       alert("Դուք չունեք admin մուտքի իրավունք");
//       setPage("booking");
//     } else {
//       setPage("login");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <nav style={{ marginBottom: "20px" }}>
//         <button onClick={() => setPage("booking")}>Queuing</button>
//         <button onClick={goToAdmin} style={{ marginLeft: "10px" }}>
//           Admin
//         </button>
//         {!role && (
//           <button
//             onClick={() => setPage("login")}
//             style={{ marginLeft: "10px" }}
//           >
//            Access:
//           </button>
//         )}
//         {role && (
//           <button
//             onClick={handleLogout}
//             style={{
//               marginLeft: "10px",
//               background: "grey",
//               color: "white",
//             }}
//           >
//            Exit({role})
//           </button>
//         )}
//       </nav>

//       {page === "admin" && role === "admin" && (
//         <Admin onLogout={handleLogout} />
//       )}
//       {page === "booking" && !selectedService && (
//         <ServiceList onSelect={setSelectedService} />
//       )}
//       {page === "booking" && selectedService && (
//         <BookingForm
//           service={selectedService}
//           onBack={() => setSelectedService(null)}
//         />
//       )}
//       {page === "login" && (
//         <Login
//           onLoginSuccess={(newRole) => {
//             localStorage.setItem("role", newRole);
//             setRole(newRole); // UPDATE STATE
//             if (newRole === "admin") {
//               setPage("admin");
//             } else {
//               setPage("booking");
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import "./App.css";

// export default function App() {
//   const [selectedServices, setSelectedServices] = useState([]); // array of services
//   const [page, setPage] = useState("booking"); // booking, admin, login
//   const [role, setRole] = useState(localStorage.getItem("role")); // STATE

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null); // RESET STATE
//     setPage("booking");
//   };

//   const goToAdmin = () => {
//     if (role === "admin") {
//       setPage("admin");
//     } else if (role === "user") {
//       alert("Դուք չունեք admin մուտքի իրավունք");
//       setPage("booking");
//     } else {
//       setPage("login");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <nav style={{ marginBottom: "20px" }}>
//         <button onClick={() => { setPage("booking"); setSelectedServices([]); }}>
//           Queuing
//         </button>
//         <button onClick={goToAdmin} style={{ marginLeft: "10px" }}>
//           Admin
//         </button>
//         {!role && (
//           <button
//             onClick={() => setPage("login")}
//             style={{ marginLeft: "10px" }}
//           >
//             Access:
//           </button>
//         )}
//         {role && (
//           <button
//             onClick={handleLogout}
//             style={{
//               marginLeft: "10px",
//               background: "grey",
//               color: "white",
//             }}
//           >
//             Exit ({role})
//           </button>
//         )}
//       </nav>

//       {/* Admin */}
//       {page === "admin" && role === "admin" && (
//         <Admin onLogout={handleLogout} />
//       )}

//       {/* Booking: եթե ոչ մի ծառայություն չի ընտրվել -> ցուցակ */}
//       {page === "booking" && selectedServices.length === 0 && (
//         <ServiceList
//           onProceed={(list) => {
//             setSelectedServices(list);
//           }}
//         />
//       )}

//       {/* Booking: երբ կան ընտրված ծառայություններ -> ամրագրում */}
//       {page === "booking" && selectedServices.length > 0 && (
//         <BookingForm
//           services={selectedServices}
//           onBack={() => setSelectedServices([])}
//         />
//       )}

//       {/* Login */}
//       {page === "login" && (
//         <Login
//           onLoginSuccess={(newRole) => {
//             localStorage.setItem("role", newRole);
//             setRole(newRole); // UPDATE STATE
//             if (newRole === "admin") {
//               setPage("admin");
//             } else {
//               setPage("booking");
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// }



// import { useState } from "react";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";   // ԱՅՍՏԵՂ ԱՎԵԼԱՑՐՈՒ
// import "./App.css";

// export default function App() {
//   const [selectedServices, setSelectedServices] = useState([]); // array of services
//   const [page, setPage] = useState("booking"); // booking, admin, login
//   const [role, setRole] = useState(localStorage.getItem("role")); // STATE

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null); // RESET STATE
//     setPage("booking");
//   };

//   const goToAdmin = () => {
//     if (role === "admin") {
//       setPage("admin");
//     } else if (role === "user") {
//       alert("Դուք չունեք admin մուտքի իրավունք");
//       setPage("booking");
//     } else {
//       setPage("login");
//     }
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar
//   setPage={setPage} 
//   goToAdmin={goToAdmin} 
//   role={role} 
//   handleLogout={handleLogout}
// /> 

//       <div style={{ padding: "20px" }}>
//         {/* Admin */}
//         {page === "admin" && role === "admin" && (
//           <Admin onLogout={handleLogout} />
//         )}

//         {/* Booking: եթե ոչ մի ծառայություն չի ընտրվել -> ցուցակ */}
//         {page === "booking" && selectedServices.length === 0 && (
//           <ServiceList
//             onProceed={(list) => {
//               setSelectedServices(list);
//             }}
//           />
//         )}

//         {/* Booking: երբ կան ընտրված ծառայություններ -> ամրագրում */}
//         {page === "booking" && selectedServices.length > 0 && (
//           <BookingForm
//             services={selectedServices}
//             onBack={() => setSelectedServices([])}
//           />
//         )}

//         {/* Login */}
//         {page === "login" && (
//           <Login
//             onLoginSuccess={(newRole) => {
//               localStorage.setItem("role", newRole);
//               setRole(newRole); // UPDATE STATE
//               if (newRole === "admin") {
//                 setPage("admin");
//               } else {
//                 setPage("booking");
//               }
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
// import "./App.css";

// export default function App() {
//   const [page, setPage] = useState("home"); // home, booking, admin, login, gallery, blog
//   const [selectedService, setSelectedService] = useState(null);
//   const [role, setRole] = useState(localStorage.getItem("role"));

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null);
//     setPage("home");
//   };

//   return (
//     <div>
//       <Navbar setPage={setPage} role={role} onLogout={handleLogout} />

//       {page === "home" && !selectedService && (
//         <ServiceList onSelect={(s) => { setSelectedService(s); setPage("booking"); }} />
//       )}

//       {page === "booking" && selectedService && (
//         <BookingForm service={selectedService} onBack={() => setSelectedService(null)} />
//       )}

//       {page === "gallery" && <Gallery />}
//       {page === "blog" && <Blog />}
//       {page === "admin" && role === "admin" && <Admin />}
//       {page === "login" && (
//         <Login
//           onLoginSuccess={(r) => {
//             localStorage.setItem("role", r);
//             setRole(r);
//             setPage(r === "admin" ? "admin" : "home");
//           }}
//         />
//       )}
//     </div>
//   );
// }



// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import "./App.css";

// export default function App() {
//   const [selectedServices, setSelectedServices] = useState([]); 
//   const [page, setPage] = useState("home"); // home, booking, gallery, blog, admin, login
//   const [role, setRole] = useState(localStorage.getItem("role"));

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null);
//     setPage("home");
//   };

//   const goToAdmin = () => {
//     if (role === "admin") {
//       setPage("admin");
//     } else if (role === "user") {
//       alert("Դուք չունեք admin մուտքի իրավունք");
//       setPage("home");
//     } else {
//       setPage("login");
//     }
//   };

//   return (
//     <div>
//       {/* Վերևի մենյուն */}
//       <Navbar setPage={setPage} onAdmin={goToAdmin} role={role} onLogout={handleLogout} />

//       {/* Էջերը */}
//       {page === "home" && (
//         <>
//           <Hero />
//           <ServiceList onProceed={(list) => setSelectedServices(list)} />
//           <Gallery />
//           <Blog />
//         </>
//       )}

//       {page === "booking" && selectedServices.length > 0 && (
//         <BookingForm
//           services={selectedServices}
//           onBack={() => setSelectedServices([])}
//         />
//       )}

//       {page === "gallery" && <Gallery />}

//       {page === "blog" && <Blog />}

//       {page === "admin" && role === "admin" && <Admin onLogout={handleLogout} />}

//       {page === "login" && (
//         <Login
//           onLoginSuccess={(newRole) => {
//             localStorage.setItem("role", newRole);
//             setRole(newRole);
//             if (newRole === "admin") {
//               setPage("admin");
//             } else {
//               setPage("home");
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// }




// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import "./App.css";

// export default function App() {
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [page, setPage] = useState("home");
//   const [role, setRole] = useState(localStorage.getItem("role"));

//   // logout
//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     setRole(null);
//     setPage("home");
//   };

//   // admin մուտք
//   const goToAdmin = () => {
//     if (role === "admin") {
//       setPage("admin");
//     } else if (role === "user") {
//       alert("Դուք չունեք admin մուտքի իրավունք");
//       setPage("home");
//     } else {
//       setPage("login");
//     }
//   };

//   return (
//     <div>
//       <Navbar setPage={setPage} onAdmin={goToAdmin} role={role} onLogout={handleLogout} />

//       {page === "home" && (
//         <>
//           <Hero />
//           <ServiceList onProceed={(list) => {
//             setSelectedServices(list);
//             setPage("booking");
//           }} />
//           <Gallery />
//           <Blog />
//         </>
//       )}

//       {page === "booking" && selectedServices.length > 0 && (
//         <BookingForm
//           services={selectedServices}
//           onBack={() => {
//             setSelectedServices([]);
//             setPage("home");
//           }}
//         />
//       )}

//       {page === "gallery" && <Gallery />}
//       {page === "blog" && <Blog />}
//       {page === "admin" && role === "admin" && <Admin onLogout={handleLogout} />}

//       {page === "login" && (
//         <Login
//           onLoginSuccess={(newRole) => {
//             localStorage.setItem("role", newRole);
//             setRole(newRole);
//             if (newRole === "admin") {
//               setPage("admin");
//             } else {
//               setPage("home");
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ServiceList from "./components/ServiceList";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
// import Admin from "./components/Admin";
// import Login from "./components/Login";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleProceed = (services) => {
//     setSelectedServices(services);
//     setPage("checkout");
//   };

//   return (
//     <div>
//       <Navbar setPage={setPage} />
//       {page === "home" && (
//         <>
//           <Hero />
//           <ServiceList onProceed={handleProceed} />
//           <Gallery />
//           <Blog />
//         </>
//       )}
//       {page === "admin" && <Admin />}
//       {page === "login" && <Login />}
//       {page === "checkout" && (
//         <div style={{ padding: "20px" }}>
//           <h2>Ձեր ընտրած ծառայությունները</h2>
//           <ul>
//             {selectedServices.map((s) => (
//               <li key={s._id}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => setPage("home")}>Վերադառնալ</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
// import ServiceList from "./components/ServiceList.js";
// import Gallery from "./components/Gallery.js";
// import Blog from "./components/Blog.js";
// import Admin from "./components/Admin.js";
// import Login from "./components/Login.js";
// // import ProtectedRoute from "./components/ProtectedRout.js";
// import ProtectedRoute from "./components/ProtectedRout.js";
// import BookingForm from "./components/BookingForm.js"; // ⬅️ Ավելացրու սա
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleProceed = (services) => {
//     setSelectedServices(services);
//     setPage("checkout");
//   };

//   return (
//     <div>
//       <Navbar setPage={setPage} />

//       {page === "home" && (
//         <>
//           <Hero />
//           <ServiceList onProceed={handleProceed} />
//           <Gallery />
//           <Blog />
//         </>
//       )}

//       {page === "admin" && (
//         <ProtectedRoute allowedRole="admin">
//           <Admin />
//         </ProtectedRoute>
//       )}

//       {page === "login" && <Login />}

//       {page === "checkout" && (
//         <BookingForm
//           services={selectedServices}
//           onBack={() => setPage("home")}
//         />
//       )}
//     </div>
//   );
// }

// export default App;





// import React, { useState } from "react";
// import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
// import ServiceList from "./components/ServiceList.js";
// import SubServiceList from "./components/SubServiceList.js"; // ✅ Ավելացրեցի
// import Gallery from "./components/Gallery.js";
// import Blog from "./components/Blog.js";
// import Admin from "./components/Admin.js";
// import Login from "./components/Login.js";
// import ProtectedRoute from "./components/ProtectedRout.js";
// import BookingForm from "./components/BookingForm.js";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");
//   const [selectedService, setSelectedService] = useState(null); // ✅ հիմնական ծառայություն
//   const [selectedSubServices, setSelectedSubServices] = useState([]); // ✅ ենթածառայություններ

//   // Երբ ընտրում ենք ծառայություն
//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setPage("subservices");
//   };

//   // Երբ ավարտում ենք ենթածառայությունների ընտրությունը
//   const handleSubServiceProceed = (subservices) => {
//     setSelectedSubServices(subservices);
//     setPage("checkout");
//   };

//   return (
//     <div>
//       <Navbar setPage={setPage} />

//       {page === "home" && (
//         <>
//           <Hero />
//           <ServiceList onProceed={handleServiceSelect} />
//           <Gallery />
//           <Blog />
//         </>
//       )}

//       {page === "subservices" && selectedService && (
//         <SubServiceList
//           service={selectedService}
//           onBack={() => setPage("home")}
//           onProceed={handleSubServiceProceed}
//         />
//       )}

//       {page === "checkout" && (
//         <BookingForm
//           services={selectedSubServices}
//           onBack={() => setPage("home")}
//         />
//       )}

//       {page === "admin" && (
//         <ProtectedRoute allowedRole="admin">
//           <Admin />
//         </ProtectedRoute>
//       )}

//       {page === "login" && <Login setPage={setPage} />}

     
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import ServiceList from "./components/ServiceList.js";
import SubServiceList from "./components/SubServiceList.js"; // ✅ ենթածառայությունների էջ
import Gallery from "./components/Gallery.js";
import Blog from "./components/Blog.js";
import Admin from "./components/Admin.js";
import Login from "./components/Login.js";
import ProtectedRoute from "./components/ProtectedRout.js";
import BookingForm from "./components/BookingForm.js";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState(null); // ✅ հիմնական ծառայություն
  const [selectedSubServices, setSelectedSubServices] = useState([]); // ✅ ենթածառայություններ

  // Երբ ընտրում ենք ծառայություն
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setPage("subservices");
  };

  // Երբ ավարտում ենք ենթածառայությունների ընտրությունը
  const handleSubServiceProceed = (subservices) => {
    setSelectedSubServices(subservices);
    setPage("checkout");
  };

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Hero />
          <ServiceList onProceed={handleServiceSelect} />
          <Gallery />
          <Blog />
        </>
      )}

      {page === "subservices" && selectedService && (
        <SubServiceList
          service={selectedService}
          onBack={() => setPage("home")}
          onProceed={handleSubServiceProceed}
        />
      )}

      {page === "checkout" && (
        <BookingForm
          services={selectedSubServices}
          onBack={() => setPage("home")}
        />
      )}

      {page === "admin" && (
        <ProtectedRoute allowedRole="admin">
          <Admin />
        </ProtectedRoute>
      )}

      {page === "login" && <Login setPage={setPage} />}
    </div>
  );
}

export default App;




