


// import React, { useState, useEffect } from "react";


// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   // ✅ Load services from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
     
//       // data.services ||
//       .then((data) => {
//          console.log("👉 data from backend:", data);
//          console.log("👉 services length:", services.length);
// console.log(JSON.stringify(services, null, 2));

//         setServices(Array.isArray(data)? data:  [] )
//        })
//       .catch((err) => console.error("❌ Error loading services:", err));

//   const toggleSelect = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   const filteredServices = Array.isArray(services) ? services.filter((s) =>
//     s.name?.toLowerCase().includes(search.toLowerCase())
//   ): [];

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id} className="service-card">
//               <img
//                 src={
//                   service.image||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed serveice"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>
//               <button onClick={()=> onProceed(service)}> Ընտրել </button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
                
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* ✅ Continue Button */}
//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

  
// useEffect(() => {
//   fetch("http://localhost:5000/services")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("👉 data from backend:", data);
//       setServices(Array.isArray(data) ? data : []);
//     })
//     .catch((err) => console.error("❌ Error loading services:", err));
// }, []); // <-- ճիշտ փակված

// const toggleSelect = (id) => {
//   setSelectedIds((prev) =>
//     prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//   );
//  };



//   const filteredServices = Array.isArray(services)
//     ? services.filter((s) => s.name?.toLowerCase().includes(search.toLowerCase()))
//     : [];

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id} className="service-card">
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>
//               <button onClick={() => onProceed(service)}>Ընտրել</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* ✅ Continue Button */}
//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }














// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);
// // http://localhost:5000/services
//   // 📌 Load services
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("👉 data from backend:", data);
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []);

//   // 📌 Toggle select service
//   const toggleSelect = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   // 📌 Search filter
//   const filteredServices = Array.isArray(services)
//     ? services.filter((s) => s.name?.toLowerCase().includes(search.toLowerCase()))
//     : [];

//   // 📌 Continue with selected
//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service ) => (
           
//             <div key={service._id} className="service-card">
              
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>

//               {/* ✅ միայն checkbox ընտրության համար */}
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//                 Ընտրել
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* ✅ Continue Button */}
//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



















// ServiceList.jsx
// import React, { useState, useEffect } from "react";
// import SubServiceList from "./SubServiceList";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [currentService, setCurrentService] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then(setServices);
//   }, []);

//   if (currentService) {
//     return (
//       <SubServiceList
//         service={currentService}
//         onBack={() => setCurrentService(null)}
//         onProceed={(selectedSubServices) =>
//           onProceed({ ...currentService, subServices: selectedSubServices })
//         }
//       />
//     );
//   }

//   return (
//     <div>
//       <h2>Ծառայություններ</h2>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {services.map((s) => (
//           <div
//             key={s._id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "10px",
//               width: "200px",
//               cursor: "pointer",
//             }}
//             onClick={() => setCurrentService(s)}
//           >
//             <img
//               src={s.image}
//               alt={s.name}
//               style={{ width: "100%", borderRadius: "8px" }}
//             />
//             <h3>{s.name}</h3>
//             <p>Գին: {s.price} AMD</p>
//             <p>Տևողություն: {s.duration} րոպե</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import SubServiceList from "./SubServiceList";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [currentService, setCurrentService] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then(setServices);
//   }, []);

//   if (currentService) {
//     return (
//       <SubServiceList
//         service={currentService}
//         onBack={() => setCurrentService(null)}
//         onProceed={(selectedSubServices) =>
//           onProceed({ ...currentService, subServices: selectedSubServices })
//         }
//       />
//     );
//   }

//   // Ֆիլտրացիա search-ի հիման վրա
//   const filteredServices = services.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Ծառայություններ</h2>

//       {/* Search input */}
//       <input
//         type="text"
//         placeholder="Որոնել ծառայություն..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           marginBottom: "20px",
//           padding: "8px",
//           width: "100%",
//           maxWidth: "400px",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//         }}
//       />

//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {filteredServices.map((s) => (
//           <div
//             key={s._id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "10px",
//               width: "200px",
//               cursor: "pointer",
//             }}
//             onClick={() => setCurrentService(s)}
//           >
//             <img
//               src={s.image}
//               alt={s.name}
//               style={{ width: "100%", borderRadius: "8px" }}
//             />
//             <h3>{s.name}</h3>
//             <p>Գին: {s.price} AMD</p>
//             <p>Տևողություն: {s.duration} րոպե</p>
//           </div>
//         ))}
//         {filteredServices.length === 0 && <p>Ծառայություններ չկան</p>}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import SubServiceList from "./SubServiceList";

export default function ServiceList({ onProceed }) {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [search, setSearch] = useState("");
  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = [
    "/images/manicure.jpg",
    "/images/cosmetologs.jpg",
    "/images/Diode_Laser.jpg",
    "/images/Facial_Cleansing.jpg",
    "/images/haircut.jpg",
    "/images/welcome_beauty_salon.jpg",
    "/images/hairstyle.jpg",
    "/images/mens_haircut.jpg",
    "/images/Barbershop-Haircuts.jpg", 
    "/images/Kids_hair_cut.jpg",
    "/images/Gel_manicure.jpg",
     "/images/Classic-Manicure.jpg",
     "/images/welcome_beauty_salon.jpg",
   
  ];

  // Services fetch
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  // Slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // 3 վրկ մեկ ավտոմատ անցում
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  if (currentService) {
    return (
      <SubServiceList
        service={currentService}
        onBack={() => setCurrentService(null)}
        onProceed={(selectedSubServices) =>
          onProceed({ ...currentService, subServices: selectedSubServices })
        }
      />
    );
  }

  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      {/* Ծառայություններ */}
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
       Services:
      </h2>

      <input
        type="text"
        placeholder="Որոնել ծառայություն..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "30px",
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredServices.map((s) => (
          <div
            key={s._id}
            onClick={() => setCurrentService(s)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "15px",
              width: "220px",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={s.image}
              alt={s.name}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "10px",
              }}
            />
            <h3>{s.name}</h3>
            <p>Price: {s.price} AMD</p>
            <p>Duration: {s.duration} minute</p>
          </div>
        ))}
        {filteredServices.length === 0 && <p>No services</p>}
      </div>

      {/* Մեր աշխատանքները */}
      <h2 style={{ textAlign: "center", margin: "50px 0 30px 0" }}>
      Our Services
      </h2>

      <div
        style={{

          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${galleryIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out",
            width: `${galleryImages.length * 100}%`,
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              style={{
                 borderRadius: "12px",
                 backgroundColor: "rgba(0,0,3,0,0)",
                 boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                 width: "50px",
                 flex: "0 0 100%",
              }}
            >
                

                <img
                src={img}
                alt={`slide-${i}`}
                style={{
                  width: "700px",
                  height: "300px",
                  objectFit: "contain", // փոխիր contain եթե ուզում ես ամբողջ նկարը երևա
                  borderRadius: "18px",
                  marginLeft:"50px",
                  marginTop:"10px",
                }}
              />

              
              
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {galleryImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setGalleryIndex(i)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: galleryIndex === i ? "#4caf50" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}





































// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);


//   useEffect(() => {
//   fetch("http://localhost:5000/services")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("👉 data from backend (raw):", data);
//       console.log("👉 type of data:", typeof data);
//       console.log("👉 isArray:", Array.isArray(data));
//       console.log("👉 filteredServices:", filteredServices);


//       if (Array.isArray(data)) {
//         data.forEach((item, i) => {
//           console.log(`🔹 Service[${i}]:`, {
//             id: item._id,
//             name: item.name,
//             price: item.price,
//             duration: item.duration,
//             image: item.image,
//           });
//         });
//       }

//       setServices(Array.isArray(data) ? data : []);
//     })
//     .catch((err) => console.error("❌ Error loading services:", err));
// }, []);


//   ✅ Load services from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("👉 data from backend:", data);
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []); // <-- ճիշտ փակված է

//   const toggleSelect = (_id) => {
//     setSelectedIds((prev) =>
//       prev.includes(_id) ? prev.filter((sid) => sid !== _id) : [...prev, _id]
//     );
//   };

//   const filteredServices = Array.isArray(services)
//     ? services.filter((s) =>
//         s.name?.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];


// const filteredServices = services.filter((service) => {
//   // const name= service?.name ? service.name.toString() : "";
//   if (!search || search.trim() === "") {
//     return true; // 👉 եթե որոնումը դատարկ է, թող բոլոր service-ները անցնեն
//   }
//   return service.name.toLowerCase().includes(search.toLowerCase());
// });

// console.log("👉 filteredServices:", filteredServices);



//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id} className="service-card">
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>
//               <button onClick={() => onProceed(service)}>Ընտրել</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* ✅ Continue Button */}
//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }














// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []);

//   const toggleSelect = (_id) => {
//     setSelectedIds((prev) =>
//       prev.includes(_id) ? prev.filter((sid) => sid !== _id) : [...prev, _id]
//     );
//   };

//   const filteredServices = services.filter((service) => {
//     if (!search || search.trim() === "") return true;
//     return service.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id} className="service-card">
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>

//               {/* ✅ Subservices */}
//               {Array.isArray(service.subServices) &&
//               service.subServices.length > 0 ? (
//                 <div className="subservices">
//                   <h4>Ենթածառայություններ:</h4>
//                   <ul>
//                     {service.subServices.map((sub, idx) => (
//                       <li key={idx}>
//                         {sub.name} – {sub.price} AMD ({sub.duration} րոպե)
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}

//               <button onClick={() => onProceed(service)}>Ընտրել</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* ✅ Continue Button */}
//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }






































// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []);

//   const toggleSelect = (_id) => {
//     setSelectedIds((prev) =>
//       prev.includes(_id) ? prev.filter((sid) => sid !== _id) : [...prev, _id]
//     );
//   };

//   const filteredServices = services.filter((service) => {
//     if (!search || search.trim() === "") {
//       return true;
//     }
//     return service.name?.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id} className="service-card">
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>

//               {/* ✅ եթե ունի ենթածառայություններ */}
//               {Array.isArray(service.subServices) &&
//               service.subServices.length > 0 ? (
//                 <div className="subservices">
//                   <h4>Ենթածառայություններ:</h4>
//                   <ul>
//                     {service.subServices.map((sub, idx) => (
//                       <li key={idx}>
//                         {sub.name} – {sub.price} AMD ({sub.duration} րոպե)
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}

//               <button onClick={() => onProceed(service)}>Ընտրել</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               padding: "10px 20px",
//               background: "#FFD700",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
















// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/Services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []);

//   const toggleSelect = (_id) => {
//     setSelectedIds((prev) =>
//       prev.includes(_id) ? prev.filter((sid) => sid !== _id) : [...prev, _id]
//     );
//   };

//   const filteredServices = services.filter((service) => {
//     if (!search || search.trim() === "") return true;
//     return service.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) =>
//       selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service) => (
//             <div key={service._id?.toString() || service.name} className="service-card">
//               <img
//                 src={
//                   service.image ||
//                   "https://via.placeholder.com/300x180.png?text=Service"
//                 }
//                 alt={service.name || "Unnamed service"}
//               />
//               <h3>{service.name || "Unnamed service"}</h3>
//               <p>Տևողություն: {service.duration || 30} րոպե</p>
//               <p>Գին: {service.price || 0} AMD</p>

//               <button onClick={() => onProceed(service)}>Ընտրել</button>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(service._id)}
//                   onChange={() => toggleSelect(service._id)}
//                 />{" "}
//                 Ընտրել հիմնական ծառայությունը
//               </label>

//               {/* 🟢 Ենթածառայությունների ցուցադրում */}
//               {service.subServices && service.subServices.length > 0 && (
//                 <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//                   <h4>Ենթածառայություններ</h4>
//                   <ul>
//                     {service.subServices.map((sub, idx) => (
//                       <li key={idx}>
//                         {sub.name} – {sub.price} AMD ({sub.duration} րոպե)
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {/* 🔘 Continue button */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button onClick={handleContinue}>Շարունակել</button>
//       </div>
//     </div>
//   );
// }














// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   // ✅ Services load
//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("Error loading services:", err));
//   }, []);

//   const toggleSelect = (id) => {
//     if (!id) return;
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   // ✅ Search filter
//   const filteredServices = services.filter((service) => {
//     if (!service || !service.name) return false;
//     if (!search || search.trim() === "") return true;
//     return service.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter(
//       (s) => s && selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service, idx) => {
//             if (!service) return null; // 🛡️ skip undefined

//             const serviceId = service._id || `service-${idx}`;

//             return (
//               <div key={serviceId} className="service-card">
//                 <img
//                   src={
//                     service.image
//                       ? service.image
//                       : "https://via.placeholder.com/300x180.png?text=Service"
//                   }
//                   alt={service.name || "Unnamed service"}
//                 />
//                 <h3>{service.name || "Unnamed service"}</h3>
//                 <p>Տևողություն: {service.duration || 30} րոպե</p>
//                 <p>Գին: {service.price || 0} AMD</p>

//                 {/* 🔽 Ենթածառայություններ */}
//                 {Array.isArray(service.subServices) &&
//                   service.subServices.length > 0 && (
//                     <ul>
//                       {service.subServices.map((sub, i) => (
//                         <li key={`${serviceId}-sub-${i}`}>
//                           {sub.name} - {sub.price} AMD ({sub.duration} րոպե)
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                 <button onClick={() => onProceed(service)}>Ընտրել</button>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={selectedIds.includes(service._id)}
//                     onChange={() => toggleSelect(service._id)}
//                   />{" "}
//                   Նշել
//                 </label>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               background: "#FFD700",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



















// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   // Load services
//   useEffect(() => {
//     fetch("http://localhost:5000/Services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("Error loading services:", err));
//   }, []);

//   const toggleSelect = (id) => {
//     if (!id) return;
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   const filteredServices = services.filter((service) => {
//     if (!service || !service.name) return false;
//     if (!search || search.trim() === "") return true;
//     return service.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter(
//       (s) => s && selectedIds.includes(s._id)
//     );
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service, idx) => {
//             if (!service) return null;

//             // 100% safe ID
//             const serviceId = service._id ? service._id : "service-" + idx;

//             return (
//               <div key={serviceId} className="service-card">
//                 <img
//                   src={
//                     service.image
//                       ? service.image
//                       : "https://via.placeholder.com/300x180.png?text=Service"
//                   }
//                   alt={service.name || "Unnamed service"}
//                 />
//                 <h3>{service.name || "Unnamed service"}</h3>
//                 <p>Տևողություն: {service.duration || 30} րոպե</p>
//                 <p>Գին: {service.price || 0} AMD</p>

//                 {Array.isArray(service.subServices) &&
//                   service.subServices.length > 0 && (
//                     <ul>
//                       {service.subServices.map((sub, i) => (
//                         <li key={serviceId + "-sub-" + i}>
//                           {sub.name} - {sub.price} AMD ({sub.duration} րոպե)
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                 <button onClick={() => onProceed(service)}>Ընտրել</button>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={selectedIds.includes(service._id)}
//                     onChange={() => toggleSelect(service._id)}
//                   />{" "}
//                   Նշել
//                 </label>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               background: "#FFD700",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

















// import React, { useState, useEffect } from "react";

// export default function ServiceList({ onProceed }) {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);

//   // ⬇️ բեռնում ենք backend-ից ծառայությունները
//   useEffect(() => {
//     fetch("http://localhost:5000/Services")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("👉 Services from backend:", data);
//         setServices(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => console.error("❌ Error loading services:", err));
//   }, []);

//   const toggleSelect = (id) => {
//     if (!id) return;
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   // ⬇️ որոնման ֆիլտր
//   const filteredServices = services.filter((service) => {
//     if (!service || !service.name) return false;
//     if (!search.trim()) return true;
//     return service.name.toLowerCase().includes(search.toLowerCase());
//   });

//   const handleContinue = () => {
//     const selectedServices = services.filter((s) => selectedIds.includes(s._id));
//     onProceed(selectedServices);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Ընտրեք ծառայությունները
//       </h2>

//       {/* 🔎 Search */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Որոնել ծառայություն..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             width: "60%",
//             maxWidth: "300px",
//           }}
//         />
//       </div>

//       {/* 📌 Service List */}
//       <div className="services">
//         {filteredServices.length > 0 ? (
//           filteredServices.map((service, idx) => {
//             if (!service) return null;

//             const serviceId = service._id || `service-${idx}`;

//             return (
//               <div key={serviceId} className="service-card">
//                 <img
//                   src={
//                     service.image ||
//                     "https://via.placeholder.com/300x180.png?text=Service"
//                   }
//                   alt={service.name || "Unnamed service"}
//                 />
//                 <h3>{service.name || "Unnamed service"}</h3>
//                 <p>Տևողություն: {service.duration || 30} րոպե</p>
//                 <p>Գին: {service.price || 0} AMD</p>

//                 {/* 🔽 Ենթածառայություններ */}
//                 {Array.isArray(service.subServices) &&
//                   service.subServices.length > 0 && (
//                     <div style={{ marginTop: "10px" }}>
//                       <h4>Ենթածառայություններ</h4>
//                       <ul>
//                         {service.subServices.map((sub, i) => (
//                           <li key={`${serviceId}-sub-${i}`}>
//                             {sub.name} - {sub.price} AMD ({sub.duration} րոպե)
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                 <button onClick={() => onProceed(service)}>Ընտրել</button>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={selectedIds.includes(service._id)}
//                     onChange={() => toggleSelect(service._id)}
//                   />{" "}
//                   Նշել
//                 </label>
//               </div>
//             );
//           })
//         ) : (
//           <p style={{ textAlign: "center" }}>Ծառայություններ հասանելի չեն</p>
//         )}
//       </div>

//       {selectedIds.length > 0 && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button
//             onClick={handleContinue}
//             style={{
//               background: "#FFD700",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Շարունակել ({selectedIds.length})
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }









