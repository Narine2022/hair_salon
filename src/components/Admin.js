// import React, { useState, useEffect } from "react";

// export default function Admin({ handleLogout }) {
//   const [services, setServices] = useState([]);
//   const [name, setName] = useState("");
//   const [duration, setDuration] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error("Error loading services:", err));
//   }, []);

//   const addService = () => {
//     if (!name || !duration) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const newService = {
//       name,
//       duration: parseInt(duration)
//     };

//     fetch("http://localhost:5000/services", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newService)
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setServices([...services, data]);
//         setName("");
//         setDuration("");
//       })
//       .catch((err) => console.error("Error adding service:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin -Service management</h2>

    
//       <div style={{ marginBottom: "20px" }}>
//         <button
//           onClick={handleLogout}
//           style={{ background: "grey", color: "white" }}
//         >
//          Exit
//         </button>
//       </div>

      
//       <div  style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Service Name:"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ marginRight: "10px"}}
//         />
//         <input
//           type="number"
//           placeholder="Duration (minutes)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           style={{ marginRight: "10px",  }}
//         />
//         <button onClick={addService}>Add</button>
//       </div>

  
//       {services.length > 0 ? (
//         <ul>
//           {services.map((service) => (
//             <li key={service.id}>
//               {service.name} - {service.duration} minute
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Services are not available</p>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";

// export default function Admin({ onLogout }) {
//   const [services, setServices] = useState([]);
//   const [name, setName] = useState("");
//   const [duration, setDuration] = useState("");
//   const [price, setPrice] = useState("");

//   // Բեռնում ենք service-ները backend-ից
//   useEffect(() => {
//     fetch("http://localhost:5000/services")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error("Error loading services:", err));
//   }, []);

//   // Ավելացնել service
//   const addService = async () => {
//     if (!name || !duration || !price) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const newService = {
//       name,
//       duration: parseInt(duration),
//       price: parseInt(price),
//     };

//     fetch("http://localhost:5000/services", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newService),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setServices((prev) => [...prev, data]);
//         setName("");
//         setDuration("");
//         setPrice("");
//       })
//       .catch((err) => console.error("Error adding service:", err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin - Service management</h2>

//       {/* Exit */}
//       <div style={{ marginBottom: "20px" }}>
//         <button
//           onClick={onLogout}
//           style={{
//             background: "grey",
//             color: "white",
//             padding: "6px 12px",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//           Exit
//         </button>
//       </div>

//       {/* Add Service */}
//       <div
//         style={{
//           marginBottom: "20px",
//           padding: "12px",
//           border: "1px solid #c9a227", // gold
//           borderRadius: "10px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Service Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ marginRight: "10px", padding: "8px" }}
//         />
//         <input
//           type="number"
//           placeholder="Duration (minutes)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           style={{ marginRight: "10px", padding: "8px", width: 170 }}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           style={{ marginRight: "10px", padding: "8px", width: 120 }}
//         />
//         <button onClick={addService} style={{ padding: "8px 12px" }}>
//           Add
//         </button>
//       </div>

//       {/* Services list */}
//       {services.length > 0 ? (
//         <ul style={{ padding: 0, listStyle: "none" }}>
//           {services.map((service) => (
//             <li
//               key={service._id} // ✅ MongoDB uses _id
//               style={{
//                 border: "1px solid #c9a227",
//                 borderRadius: "10px",
//                 padding: "10px",
//                 marginBottom: "10px",
//               }}
//             >
//               <strong>{service.name}</strong> — {service.duration} min —{" "}
//               {service.price ?? 0} ֏
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Services are not available</p>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Admin Panel</h2>

//       <div style={formStyle}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <button
//           onClick={handleAdd}
//           style={{
//             background: "green",
//             color: "#fff",
//             padding: "10px 15px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Ավելացնել
//         </button>
//       </div>

//       <h3>Գրանցված ծառայություններ</h3>
//       <ul>
//         {services.map((s) => (
//           <li key={s._id}>
//             {s.name} - {s.price} AMD ({s.duration} րոպե)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   gap: "10px",
//   marginBottom: "20px",
// };

// const inputStyle = {
//   padding: "8px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// src/components/images/anahit.jpg
// import AniImg from "./images/Ani.jpg";


// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: " ",
//   });

//   const specialists = [
//     {
//       id: "1",
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "AniImg ",
//     },
//     {
//       id: "2",
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "AnahitImg",
//     },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={formStyle}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <button
//           onClick={handleAdd}
//           style={{
//             background: "green",
//             color: "#fff",
//             padding: "10px 15px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Ավելացնել
//         </button>
//       </div>

//       {/* Ծառայությունների ցուցակ */}
//       <h3>Գրանցված ծառայություններ</h3>
//       <ul>
//         {services.map((s) => (
//           <li key={s._id}>
//             {s.name} - {s.price} AMD ({s.duration} րոպե)
//           </li>
//         ))}
//       </ul>

//       {/* Ամրագրումներ */}
//       <h3 style={{ marginTop: "40px" }}>Ամրագրումներ</h3>
//       <ul>
//         {bookings.length > 0 ? (
//           bookings.map((b) => {
//             const specialist = specialists.find(
//               (sp) => sp.id === b.specialistId || sp.firstName === b.specialist
//             );

//             return (
//               <li key={b._id} style={{ marginBottom: "20px" }}>
//                 👤 {b.name} | 📞 {b.phone} | ⏰{" "}
//                 {new Date(b.createdAt).toLocaleString()}
//                 <br />
//                 👩‍🔧 Մասնագետ՝{" "}
//                 {specialist ? (
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                       margin: "5px 0",
//                     }}
//                   >
//                     <img
//                       src={specialist.photo}
//                       alt={`${specialist.firstName} ${specialist.lastName}`}
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                       }}
//                     />
//                     {specialist.firstName} {specialist.lastName}
//                   </span>
//                 ) : (
//                   b.specialist
//                 )}
//                 <br />
//                 ➡️ Ծառայություններ:
//                 <ul>
//                   {b.services.map((s, i) => (
//                     <li key={i}>
//                       {s.name} - {s.price} AMD ({s.duration} րոպե)
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             );
//           })
//         ) : (
//           <li>Ամրագրումներ դեռ չկան</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   gap: "10px",
//   marginBottom: "20px",
// };

// const inputStyle = {
//   padding: "8px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };




// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   // ✅ Նկարների ուղիները գալիս են public պանակից
//   const specialists = [
//     {
//       id: "1",
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "/images/anahit.jpg",
//     },
//     {
//       id: "2",  
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "/images/ani.jpg",
//     },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={formStyle}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         <button
//           onClick={handleAdd}
//           style={{
//             background: "green",
//             color: "#fff",
//             padding: "10px 15px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Ավելացնել
//         </button>
//       </div>

//       {/* Ծառայությունների ցուցակ */}
//       <h3>Գրանցված ծառայություններ</h3>
//       <ul>
//         {services.map((s) => (
//           <li key={s._id}>
//             {s.name} - {s.price} AMD ({s.duration} րոպե)
//           </li>
//         ))}
//       </ul>

//       {/* Ամրագրումների ցուցակ */}
//       <h3 style={{ marginTop: "40px" }}>Ամրագրումներ</h3>
//       <ul>

// {/* || sp.firstName === b.specialist */}

//         {bookings.length > 0 ? (
//           bookings.map((b) => {
//             const specialist = specialists.find(
//               (sp) =>
//                 sp.id === b.specialistId 
//             );

//             return (
//               <li key={b._id} style={{ marginBottom: "20px" }}>
//                 👤 {b.name} | 📞 {b.phone} | ⏰{" "}
//                 {new Date(b.createdAt).toLocaleString()}
//                 <br />
//                 👩‍🔧 Մասնագետ՝{" "}
//                 {specialist ? (
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                       marginTop: "5px",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     <img
//                       src={specialist.photo}
//                       alt={`${specialist.firstName} ${specialist.lastName}`}
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                       }}
//                     />
//                     {specialist.firstName} {specialist.lastName}
//                   </span>
//                 ) : (
//                   b.specialist
//                 )}
//                 <br />
//                 ➡️ Ծառայություններ:
//                 <ul>
//                   {b.services.map((s, i) => (
//                     <li key={i}>
//                       {s.name} - {s.price} AMD ({s.duration} րոպե)
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             );
//           })
//         ) : (
//           <p>Ամրագրումներ դեռ չկան</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   gap: "10px",
//   marginBottom: "20px",
// };

// const inputStyle = {
//   padding: "8px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };



// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   const specialists = [
//     {
//       id: "1",
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "/images/anahit.jpg",
//     },
//     {
//       id: "2",
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "/images/ani.jpg",
//     },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };


//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>
//           Ավելացնել
//         </button>
//       </div>

//       {/* Ծառայությունների և Ամրագրումների ցուցակներ կողք կողքի */}
//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map((s) => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? (
//               bookings.map((b) => {
//                 const specialist = specialists.find(
//                   (sp) => sp.id.toString() === b.specialistId?.toString()
//                 );

//                 return (
//                   <li key={b._id} style={styles.bookingItem}>
//                     <div>
//                       <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰{" "}
//                       {new Date(b.createdAt).toLocaleString()}
//                     </div>
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝{" "}
//                       {specialist ? (
//                         <span style={styles.specialistInfo}>
//                           <img
//                             src={specialist.photo}
//                             alt={`${specialist.firstName} ${specialist.lastName}`}
//                             style={styles.specialistPhoto}
//                           />
//                           {specialist.firstName} {specialist.lastName}
//                         </span>
//                       ) : (
//                         b.specialist
//                       )}
//                     </div>
//                     <div>
//                       ➡️ Ծառայություններ:
//                       <ul style={styles.innerList}>
//                         {b.services.map((s, i) => (
//                           <li key={i}>
//                             {s.name} - {s.price} AMD ({s.duration} րոպե)
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </li>
//                 );
//               })
//             ) : (
//               <p>Ամրագրումներ դեռ չկան</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   title: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "30px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "400px",
//     gap: "10px",
//     margin: "0 auto 40px auto",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   addButton: {
//     padding: "12px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   listsContainer: {
//     display: "flex",
//     gap: "40px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   listBox: {
//     flex: "1 1 400px",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//     maxHeight: "600px",
//     overflowY: "auto",
//     transition: "transform 0.3s ease",
//   },
//   listTitle: {
//     marginBottom: "15px",
//     color: "#222",
//     borderBottom: "2px solid #4caf50",
//     paddingBottom: "5px",
//   },
//   list: {
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//   },
//   listItem: {
//     padding: "10px",
//     borderBottom: "1px solid #eee",
//     fontSize: "15px",
//     transition: "background-color 0.2s ease",
//   },
//   bookingItem: {
//     padding: "15px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     backgroundColor: "#e8f5e9",
//     boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
//     fontSize: "15px",
//   },
//   specialist: {
//     marginTop: "8px",
//     display: "flex",
//     alignItems: "center",
//   },
//   specialistInfo: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginLeft: "8px",
//     fontWeight: "600",
//     color: "#2e7d32",
//   },
//   specialistPhoto: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
//   innerList: {
//     marginTop: "8px",
//     paddingLeft: "20px",
//   },
// };








// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   const specialists = [
//     {
//       id: "1",
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "/images/anahit.jpg",
//     },
//     {
//       id: "2",
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "/images/ani.jpg",
//     },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>
//           Ավելացնել
//         </button>
//       </div>

//       {/* Ծառայությունների և Ամրագրումների ցուցակներ կողք կողքի */}
//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map((s) => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? (
//               bookings.map((b) => {
//                 const specialist = specialists.find(
//                   (sp) =>  `${sp.firstName} ${sp.lastName}` === b.specialist
//                 );
                       
                 

//                 return (
//                   <li key={b._id} style={styles.bookingItem}>
//                     <div>
//                       <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰{" "}
//                       {new Date(b.createdAt).toLocaleString()}
//                     </div>
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝{" "}
//                       {specialist ? (
//                         <span style={styles.specialistInfo}>
//                           <img
//                             src={specialist.photo}
//                             alt={`${specialist.firstName} ${specialist.lastName}`}
//                             style={styles.specialistPhoto}
//                           />
//                           {specialist.firstName} {specialist.lastName}
//                         </span>
//                       ) : (
//                         b.specialist
//                       )}
//                     </div>
//                     <div>

//   ➡️ Ծառայություններ:
//   {b.services && b.services.length > 0 ? (
//     <ul>
//       {b.services.map((s, i) => (
//         <li key={i}>
//           {s.name} - {s.price} AMD ({s.duration} րոպե)
//         </li>
//       ))}
//     </ul>
//   ) : (
//     " Չկան"
//   )}



//                       {/* ➡️ Ծառայություններ:
                    
//                       <ul style={styles.innerList}>
//                         {b.services.map((s, i) => (
//                           <li key={i}>
//                             {s.name} - {s.price} AMD ({s.duration} րոպե)
//                           </li>
//                         ))}
//                       </ul> */}
                      
//                     </div>
//                   </li>
//                 );
//               })
//             ) : (
//               <p>Ամրագրումներ դեռ չկան</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   title: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "30px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "400px",
//     gap: "10px",
//     margin: "0 auto 40px auto",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   addButton: {
//     padding: "12px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   listsContainer: {
//     display: "flex",
//     gap: "40px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   listBox: {
//     flex: "1 1 400px",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//     maxHeight: "600px",
//     overflowY: "auto",
//     transition: "transform 0.3s ease",
//   },
//   listTitle: {
//     marginBottom: "15px",
//     color: "#222",
//     borderBottom: "2px solid #4caf50",
//     paddingBottom: "5px",
//   },
//   list: {
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//   },
//   listItem: {
//     padding: "10px",
//     borderBottom: "1px solid #eee",
//     fontSize: "15px",
//     transition: "background-color 0.2s ease",
//   },
//   bookingItem: {
//     padding: "15px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     backgroundColor: "#e8f5e9",
//     boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
//     fontSize: "15px",
//   },
//   specialist: {
//     marginTop: "8px",
//     display: "flex",
//     alignItems: "center",
//   },
//   specialistInfo: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginLeft: "8px",
//     fontWeight: "600",
//     color: "#2e7d32",
//   },
//   specialistPhoto: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
//   innerList: {
//     marginTop: "8px",
//     paddingLeft: "20px",
//   },
// };


// import { useState, useEffect } from "react";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   const specialists = [
//     {
//       id: "1",
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "/images/anahit.jpg",
//     },
//     {
//       id: "2",
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "/images/ani.jpg",
//     },
//   ];

//   useEffect(() => {
//     // Mock տվյալներ
//     const mockServices = [
//       { _id: "1", name: "Gel manicure", price: 8000, duration: 60 },
//       { _id: "2", name: "Pedicure", price: 7000, duration: 50 },
//       { _id: "3", name: "Женская стрижка", price: 5000, duration: 40 },
//     ];
//     setServices(mockServices);

//     const mockBookings = [
//       {
//         _id: "b1",
//         name: "Արամ",
//         phone: "091234567",
//         createdAt: new Date().toISOString(),
//         specialist: "Անահիտ Մելքոնյան",
//         services: [mockServices[0], mockServices[2]],
//       },
//       {
//         _id: "b2",
//         name: "Նարին",
//         phone: "099876543",
//         createdAt: new Date().toISOString(),
//         specialist: "Անի Սահակյան",
//         services: [mockServices[1]],
//       },
//     ];
//     setBookings(mockBookings);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     const newService = { _id: Date.now().toString(), ...form };
//     setServices([...services, newService]);
//     setForm({ name: "", price: "", duration: "", image: "" });
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Գին"
//           value={form.price}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="duration"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>
//           Ավելացնել
//         </button>
//       </div>

//       {/* Ծառայությունների և Ամրագրումների ցուցակներ */}
//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map((s) => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? (
//               bookings.map((b) => {
//                 const specialist = specialists.find(
//                   (sp) => `${sp.firstName} ${sp.lastName}` === b.specialist
//                 );

//                 return (
//                   <li key={b._id} style={styles.bookingItem}>
//                     <div>
//                       <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰{" "}
//                       {new Date(b.createdAt).toLocaleString()}
//                     </div>
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝{" "}
//                       {specialist ? (
//                         <span style={styles.specialistInfo}>
//                           <img
//                             src={specialist.photo}
//                             alt={`${specialist.firstName} ${specialist.lastName}`}
//                             style={styles.specialistPhoto}
//                           />
//                           {specialist.firstName} {specialist.lastName}
//                         </span>
//                       ) : (
//                         b.specialist
//                       )}
//                     </div>
//                     <div>
//                       ➡️ Ծառայություններ:
//                       <ul style={styles.innerList}>
//                         {b.services.map((s, i) => (
//                           <li key={i}>
//                             {s.name} - {s.price} AMD ({s.duration} րոպե)
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </li>
//                 );
//               })
//             ) : (
//               <p>Ամրագրումներ դեռ չկան</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   title: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "30px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "400px",
//     gap: "10px",
//     margin: "0 auto 40px auto",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   addButton: {
//     padding: "12px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   listsContainer: {
//     display: "flex",
//     gap: "40px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   listBox: {
//     flex: "1 1 400px",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//     maxHeight: "600px",
//     overflowY: "auto",
//     transition: "transform 0.3s ease",
//   },
//   listTitle: {
//     marginBottom: "15px",
//     color: "#222",
//     borderBottom: "2px solid #4caf50",
//     paddingBottom: "5px",
//   },
//   list: {
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//   },
//   listItem: {
//     padding: "10px",
//     borderBottom: "1px solid #eee",
//     fontSize: "15px",
//     transition: "background-color 0.2s ease",
//   },
//   bookingItem: {
//     padding: "15px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     backgroundColor: "#e8f5e9",
//     boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
//     fontSize: "15px",
//   },
//   specialist: {
//     marginTop: "8px",
//     display: "flex",
//     alignItems: "center",
//   },
//   specialistInfo: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginLeft: "8px",
//     fontWeight: "600",
//     color: "#2e7d32",
//   },
//   specialistPhoto: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
//   innerList: {
//     marginTop: "8px",
//     paddingLeft: "20px",
//   },
// };








// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(err => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(err => console.error(err));
//   };

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", form)
//       .then(() => { fetchServices(); setForm({ name: "", price: "", duration: "", image: "" }); })
//       .catch(err => console.error(err));
//   };

//   return (
//     <div style={{ padding: 30, fontFamily: "Segoe UI", minHeight: "100vh", background: "#f9f9f9" }}>
//       <h2 style={{ textAlign: "center" }}>Admin Panel</h2>

//       <div style={{ maxWidth: 400, margin: "0 auto 40px", padding: 20, background: "#fff", borderRadius: 10 }}>
//         <input name="name" placeholder="Ծառայության անուն" value={form.name} onChange={handleChange} style={inputStyle}/>
//         <input name="price" placeholder="Գին" type="number" value={form.price} onChange={handleChange} style={inputStyle}/>
//         <input name="duration" placeholder="Տևողություն (րոպե)" type="number" value={form.duration} onChange={handleChange} style={inputStyle}/>
//         <input name="image" placeholder="Նկարի URL" value={form.image} onChange={handleChange} style={inputStyle}/>
//         <button onClick={handleAdd} style={buttonStyle}>Ավելացնել</button>
//       </div>

//       <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
//         <div style={listBoxStyle}>
//           <h3 style={listTitleStyle}>Գրանցված ծառայություններ</h3>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {services.map(s => (
//               <li key={s._id}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//             ))}
//           </ul>
//         </div>

//         <div style={listBoxStyle}>
//           <h3 style={listTitleStyle}>Ամրագրումներ</h3>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {bookings.length ? bookings.map(b => {
//               const specialist = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//               return (
//                 <li key={b._id} style={{ marginBottom: 20, background: "#e8f5e9", padding: 15, borderRadius: 8 }}>
//                   <div><strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}</div>
//                   <div>
//                     👩‍🔧 Մասնագետ՝ {specialist ? `${specialist.firstName} ${specialist.lastName}` : b.specialist}
//                   </div>
//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services?.length ? (
//                       <ul>
//                         {b.services.map((s, i) => <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>)}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const inputStyle = { width: "100%", padding: 10, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" };
// const buttonStyle = { padding: 12, background: "#4caf50", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" };
// const listBoxStyle = { flex: "1 1 400px", padding: 20, background: "#fff", borderRadius: 12, maxHeight: 600, overflowY: "auto" };
// const listTitleStyle = { marginBottom: 15, borderBottom: "2px solid #4caf50", paddingBottom: 5 };








// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     duration: "",
//     image: "",
//   });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     fetchServices();
//     fetchBookings();
//   }, []);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => console.error(err));
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", form)
//       .then(() => {
//         fetchServices();
//         setForm({ name: "", price: "", duration: "", image: "" });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input type="text" name="name" placeholder="Ծառայության անուն" value={form.name} onChange={handleChange} style={styles.input} />
//         <input type="number" name="price" placeholder="Գին" value={form.price} onChange={handleChange} style={styles.input} />
//         <input type="number" name="duration" placeholder="Տևողություն (րոպե)" value={form.duration} onChange={handleChange} style={styles.input} />
//         <input type="text" name="image" placeholder="Նկարի URL" value={form.image} onChange={handleChange} style={styles.input} />
//         <button onClick={handleAdd} style={styles.addButton}>Ավելացնել</button>
//       </div>

//       {/* Ծառայությունների և Ամրագրումների ցուցակներ */}
//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map((s) => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map((b) => {
//               const specialist = specialists.find(
//                 (sp) => `${sp.firstName} ${sp.lastName}` === b.specialist
//               );

//               return (
//                 <li key={b._id} style={styles.bookingItem}>
//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>

//                   <div style={styles.specialist}>
//                     👩‍🔧 Մասնագետ՝{" "}
//                     {specialist ? (
//                       <span style={styles.specialistInfo}>
//                         <img
//                           src={specialist.photo}
//                           alt={`${specialist.firstName} ${specialist.lastName}`}
//                           style={styles.specialistPhoto}
//                         />
//                         {specialist.firstName} {specialist.lastName}
//                       </span>
//                     ) : (
//                       b.specialist
//                     )}
//                   </div>

//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s, i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// };









// import { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "1234" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", form)
//       .then(() => {
//         setForm({ name: "", price: "", duration: "", image: "" });
//         fetchServices();
//       })
//       .catch(console.error);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={{ padding: "50px", textAlign: "center" }}>
//         <h2>Admin Login</h2>
//         <form onSubmit={handleLogin}>
//           <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
//           <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Panel</h2>

//       <div style={{ marginBottom: "20px" }}>
//         <h3>Ավելացնել Ծառայություն</h3>
//         <input placeholder="Անուն" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
//         <input type="number" placeholder="Գին" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
//         <input type="number" placeholder="Տևողություն" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
//         <input placeholder="Նկարի URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
//         <button onClick={handleAdd}>Ավելացնել</button>
//       </div>

//       <h3>Ծառայություններ</h3>
//       <ul>
//         {services.map(s => <li key={s._id}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>)}
//       </ul>

//       <h3>Ամրագրումներ</h3>
//       <ul>
//         {bookings.length > 0 ? bookings.map(b => {
//           const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//           return (
//             <li key={b._id}>
//               {b.name} | {b.phone} | {new Date(b.createdAt).toLocaleString()}
//               {sp && <img src={sp.photo} alt={sp.firstName} width={40} style={{ borderRadius: "50%", marginLeft: "5px" }} />}
//               <ul>{b.services?.map((s,i) => <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>)}</ul>
//             </li>
//           );
//         }) : <p>Ամրագրումներ դեռ չկան</p>}
//       </ul>

//       <button onClick={() => setLoggedIn(false)} style={{ marginTop: "20px" }}>Logout</button>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "1234" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", form)
//       .then(() => {
//         setForm({ name: "", price: "", duration: "", image: "" });
//         fetchServices();
//       })
//       .catch(console.error);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>Ավելացնել</button>
//       </div>

//       {/* Ծառայությունների ցուցակ */}
//       <div style={styles.listBox}>
//         <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//         <ul style={styles.list}>
//           {services.map(s => (
//             <li key={s._id} style={styles.listItem}>
//               {s.name} - {s.price} AMD ({s.duration} րոպե)
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Ամրագրումների ցուցակ */}
//       <div style={styles.listBox}>
//         <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//         <ul style={styles.list}>
//           {bookings.length > 0 ? bookings.map(b => {
//             const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//             return (
//               <li key={b._id} style={styles.bookingItem}>
//                 <div>
//                   <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                 </div>
//                 {sp && (
//                   <div style={styles.specialist}>
//                     👩‍🔧 Մասնագետ՝
//                     <span style={styles.specialistInfo}>
//                       <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                       {sp.firstName} {sp.lastName}
//                     </span>
//                   </div>
//                 )}
//                 <div>
//                   ➡️ Ծառայություններ:
//                   {b.services && b.services.length > 0 ? (
//                     <ul>
//                       {b.services.map((s,i) => (
//                         <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//                       ))}
//                     </ul>
//                   ) : " Չկան"}
//                 </div>
//               </li>
//             );
//           }) : <p>Ամրագրումներ դեռ չկան</p>}
//         </ul>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto", marginBottom: "20px" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// };




// import { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "1234" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", form)
//       .then(() => {
//         setForm({ name: "", price: "", duration: "", image: "" });
//         fetchServices();
//       })
//       .catch(console.error);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>Ավելացնել</button>
//       </div>

//       {/* Ծառայություններ և Ամրագրումներ կողք կողքի */}
//       <div style={styles.listsContainer}>
//         {/* Ծառայությունների ցուցակ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map(s => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Ամրագրումների ցուցակ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map(b => {
//               const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//               return (
//                 <li key={b._id} style={styles.bookingItem}>
//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>
//                   {sp && (
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝
//                       <span style={styles.specialistInfo}>
//                         <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                         {sp.firstName} {sp.lastName}
//                       </span>
//                     </div>
//                   )}
//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s,i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// };











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = {
//   username: "admin",
//   password: "1234",
// };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = () => {
//      axios.post("http://localhost:5000/services", {
//     name: form.name,
//     price: Number(form.price),
//     duration: Number(form.duration),
//     image: form.image
//   })
//     // axios.post("http://localhost:5000/services", form)
//       .then(() => {
//         setForm({ name: "", price: "", duration: "", image: "" });
//         fetchServices();
//       })
//       .catch(console.error);
//   };

//   const handleDeleteService = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ծառայությունը")) {
//       axios.delete(`http://localhost:5000/services/${id}`)
//         .then(() => fetchServices())
//         .catch(console.error);
//     }
//   };

//   const handleDeleteBooking = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ամրագրումը")) {
//       axios.delete(`http://localhost:5000/bookings/${id}`)
//         .then(() => fetchBookings())
//         .catch(console.error);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>Ավելացնել</button>
//       </div>

//       {/* Ծառայություններ և Ամրագրումներ */}
//       <div style={styles.listsContainer}>
//         {/* Ծառայություններ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map(s => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//                 <button
//                   onClick={() => handleDeleteService(s._id)}
//                   style={styles.deleteButton}
//                 >
//                    Ջնջել
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Ամրագրումներ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map(b => {
//               const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//               return (                   
//                 <li key={b._id} style={styles.bookingItem}>
                     


//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>
//                   {sp && (
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝
//                       <span style={styles.specialistInfo}>
//                         <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                         {sp.firstName} {sp.lastName}
//                       </span>
//                     </div>
//                   )}
//                   <div>

                     
//                     ➡️ Ծառայություններ:

//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s,i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                  <button
//                     onClick={() => handleDeleteBooking(b._id)}
//                     style={styles.deleteButton}
//                   >
//                      Ջնջել
//                   </button>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "10px" },
//    deleteButton: { marginLeft: "15px", backgroundColor: "#ccc", color: "#fff", border: "none", borderRadius: "9px", padding: "2px 5px", cursor: "pointer", fontSize: "14px" },
//    listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
  
// };










// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = {
//   username: "admin",
//   password: "1234",
// };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = () => {
//     axios.post("http://localhost:5000/services", {
//       name: form.name,
//       price: Number(form.price),
//       duration: Number(form.duration),
//       image: form.image
//     })
//     .then(() => {
//       setForm({ name: "", price: "", duration: "", image: "" });
//       fetchServices();
//       console.log("✅ Ծառայությունը ավելացվեց");
//     })
//     .catch(err => {
//       console.error(err);
//       alert("❌ Ծառայությունը չի ավելացվել, ստուգեք կոնսոլը");
//     });
//   };

//   const handleDeleteService = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ծառայությունը")) {
//       axios.delete(`http://localhost:5000/services/${id}`)
//         .then(() => fetchServices())
//         .catch(console.error);
//     }
//   };

//   const handleDeleteBooking = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ամրագրումը")) {
//       axios.delete(`http://localhost:5000/bookings/${id}`)
//         .then(() => fetchBookings())
//         .catch(console.error);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       {/* Ծառայությունների ձև */}
//       <div style={styles.form}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button onClick={handleAdd} style={styles.addButton}>Ավելացնել</button>
//       </div>

//       {/* Ծառայություններ և Ամրագրումներ */}
//       <div style={styles.listsContainer}>
//         {/* Ծառայություններ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map(s => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//                 <button
//                   onClick={() => handleDeleteService(s._id)}
//                   style={styles.deleteButton}
//                 >
//                    Ջնջել
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Ամրագրումներ */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map(b => {
//               const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}` === b.specialist);
//               return (                   
//                 <li key={b._id} style={styles.bookingItem}>
//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>
//                   {sp && (
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝
//                       <span style={styles.specialistInfo}>
//                         <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                         {sp.firstName} {sp.lastName}
//                       </span>
//                     </div>
//                   )}
//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s,i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե)</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                   <button
//                     onClick={() => handleDeleteBooking(b._id)}
//                     style={styles.deleteButton}
//                   >
//                      Ջնջել
//                   </button>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "10px" },
//   deleteButton: { marginLeft: "15px", backgroundColor: "#ccc", color: "#fff", border: "none", borderRadius: "9px", padding: "2px 5px", cursor: "pointer", fontSize: "14px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// }









// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "n123" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//     // { id: "3", firstName: "Մերրի", lastName: "Հակոբյան",photo : "/images/cosmetology_specialist.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.price || !form.duration) {
//       alert("Լրացրեք բոլոր դաշտերը");
//       return;
//     }
//     axios.post("http://localhost:5000/services", {
//       name: form.name,
//       price: Number(form.price),
//       duration: Number(form.duration),
//       image: form.image
//     })
//     .then(() => {
//       setForm({ name: "", price: "", duration: "", image: "" });
//       fetchServices();
//     })
//     .catch(err => {
//       console.error(err);
//       alert("Ինչ-որ սխալ տեղի ունեցավ: ստուգեք կոնսոլը");
//     });
//   };

//   const handleDeleteService = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ծառայությունը")) {
//       axios.delete(`http://localhost:5000/services/${id}`)
//         .then(() => fetchServices())
//         .catch(console.error);
//     }
//   };

//   const handleDeleteBooking = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ամրագրումը")) {
//       axios.delete(`http://localhost:5000/bookings/${id}`)
//         .then(() => fetchBookings())
//         .catch(console.error);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       <form style={styles.form} onSubmit={handleAdd}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.addButton}>Ավելացնել</button>
//       </form>

//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map(s => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//                 <button
//                   onClick={() => handleDeleteService(s._id)}
//                   style={styles.deleteButton}
//                 >
//                   Ջնջել
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
            




//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map(b => {
//               // const sp = specialists.find(sp => `${sp.firstName} ${sp.lastName}`.toLowerCase() === b.specialist.toLowerCase());
// const normalize = (str) => str.replace(/\(.*?\)/g, "").trim().toLowerCase();
//               const sp = specialists.find(sp =>
//   sp.firstName.toLowerCase() === b.specialist.toLowerCase() ||
//   `${sp.firstName} ${sp.lastName}`.toLowerCase() === b.specialist.toLowerCase()
// );

             






//              console.log("Booking:", b.specialist);
//               console.log("Matched specialist:", sp);



//               return (
//                 <li key={b._id} style={styles.bookingItem}>
//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>
//                   {sp && (
                    
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝
//                       <span style={styles.specialistInfo}>
//                         <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                         {sp.firstName} {sp.lastName}
//                       </span>
//                     </div>
//                   )}
//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s,i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե) {s.image}</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                   <button
//                     onClick={() => handleDeleteBooking(b._id)}
//                     style={styles.deleteButton}
//                   >
//                     Ջնջել
//                   </button>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "10px" },
//   deleteButton: { marginLeft: "15px", backgroundColor: "#ccc", color: "#fff", border: "none", borderRadius: "9px", padding: "2px 5px", cursor: "pointer", fontSize: "14px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//    listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//    specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// }


























import React, { useState, useEffect } from "react";
import axios from "axios";

const ADMIN_CREDENTIALS = { username: "admin", password: "n123" };

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

  const specialists = [
    { id: 1, firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
    { id: 2, firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
    { id: 3, firstName: "Մերրի", lastName: "Հակոբյան", photo: "/images/cosmetology_specialist.jpg" },
  ];

  useEffect(() => {
    if (loggedIn) {
      fetchServices();
      fetchBookings();
    }
  }, [loggedIn]);

  const fetchServices = () => {
    axios.get("http://localhost:5000/services")
      .then(res => setServices(res.data))
      .catch(console.error);
  };

  const fetchBookings = () => {
    axios.get("http://localhost:5000/bookings")
      .then(res => setBookings(res.data))
      .catch(console.error);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.duration) {
      alert("Լրացրեք բոլոր դաշտերը");
      return;
    }
    axios.post("http://localhost:5000/services", {
      name: form.name,
      price: Number(form.price),
      duration: Number(form.duration),
      image: form.image
    })
    .then(() => {
      setForm({ name: "", price: "", duration: "", image: "" });
      fetchServices();
    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong. Check the console.");
    });
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Do you want to delete this service?")) {
      axios.delete(`http://localhost:5000/services/${id}`)
        .then(() => fetchServices())
        .catch(console.error);
    }
  };

  const handleDeleteBooking = (id) => {
    if (window.confirm("Do you want to delete this reservation?")) {
      axios.delete(`http://localhost:5000/bookings/${id}`)
        .then(() => fetchBookings())
        .catch(console.error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setLoggedIn(true);
    } else {
      alert("❌ Username or password is wrong");
    }
  };

  // 👇 ֆունկցիա, որ normalize անի specialist-ը
  const getSpecialistName = (spec) => {
    if (!spec) return "";
    if (typeof spec === "string") return spec;
    if (typeof spec === "object") return spec.name || "";
    return "";
  };

  if (!loggedIn) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Admin Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Panel</h2>

      <form style={styles.form} onSubmit={handleAdd}>
        <input
          placeholder="Service name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Duration (minute)"
          value={form.duration}
          onChange={e => setForm({ ...form, duration: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Նկարի URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Add</button>
      </form>

      <div style={styles.listsContainer}>
        <div style={styles.listBox}>
          <h3 style={styles.listTitle}>Registered services</h3>
          <ul style={styles.list}>
            {services.map(s => (
              <li key={s._id} style={styles.listItem}>
                {s.name} - {s.price} AMD ({s.duration} minute)
                <button
                  onClick={() => handleDeleteService(s._id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.listBox}>
          <h3 style={styles.listTitle}>Reservations</h3>
          <ul style={styles.list}>
            {bookings.length > 0 ? bookings.map(b => {
              const specialistName = getSpecialistName(b.specialist);

              const sp = specialists.find(sp =>
                sp.firstName.toLowerCase() === specialistName.toLowerCase() ||
                `${sp.firstName} ${sp.lastName}`.toLowerCase() === specialistName.toLowerCase()
              );

              return (
                <li key={b._id} style={styles.bookingItem}>
                  <div>
                    <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
                  </div>
                  {sp && (

//                             <div style={styles.specialist}>
//   👩‍🔧 Մասնագետ՝
//   <span style={styles.specialistInfo}>
//     {b.specialist?.photo && (
//       <img src={b.specialist.photo} alt={b.specialist.name} style={styles.specialistPhoto} />
//     )}
//     {b.specialist?.name} {b.specialist?.role && `- ${b.specialist.role}`}
//   </span>
// </div>


                      




                    <div style={styles.specialist}>
                      👩‍🔧 Specialist՝
                      <span style={styles.specialistInfo}>
                        <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
                        {sp.firstName} {sp.lastName}
                      </span>
                    </div>
                  )}

                  
                  {!sp && specialistName && (
                    <div>👩‍🔧 Specialist՝ {specialistName}</div>
                  )}
                  <div>
                    ➡️ Ծառայություններ:
                    {b.services && b.services.length > 0 ? (
                      <ul>
                        {b.services.map((s,i) => (
                          <li key={i}>{s.name} - {s.price} AMD ({s.duration} minute)</li>
                        ))}
                      </ul>
                    ) : " There are none."}
                  </div>
                  <button
                    onClick={() => handleDeleteBooking(b._id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </li>
              );
            }) : <p>No reservations yet.</p>}
          </ul>
        </div>
      </div>

      <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
    </div>
  );
}

const styles = {
  container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
  title: { textAlign: "center", color: "#333", marginBottom: "30px" },
  form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
  addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "10px" },
  deleteButton: { marginLeft: "15px", backgroundColor: "#ccc", color: "#fff", border: "none", borderRadius: "9px", padding: "2px 5px", cursor: "pointer", fontSize: "14px" },
  listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
  listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
  listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
  list: { listStyle: "none", padding: "0", margin: "0" },
  listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
  specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
  specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
  specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
};






































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "n123" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//     { id: "3", firstName: "Մերրի", lastName: "Հակոբյան", photo: "/images/cosmetology_specialist.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   const fetchServices = () => {
//     axios.get("http://localhost:5000/services")
//       .then(res => setServices(res.data))
//       .catch(console.error);
//   };

//   const fetchBookings = () => {
//     axios.get("http://localhost:5000/bookings")
//       .then(res => setBookings(res.data))
//       .catch(console.error);
//   };

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.price || !form.duration) {
//       alert("Լրացրեք բոլոր դաշտերը");
//       return;
//     }
//     axios.post("http://localhost:5000/services", {
//       name: form.name,
//       price: Number(form.price),
//       duration: Number(form.duration),
//       image: form.image
//     })
//     .then(() => {
//       setForm({ name: "", price: "", duration: "", image: "" });
//       fetchServices();
//     })
//     .catch(err => {
//       console.error(err);
//       alert("Ինչ-որ սխալ տեղի ունեցավ: ստուգեք կոնսոլը");
//     });
//   };

//   const handleDeleteService = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ծառայությունը")) {
//       axios.delete(`http://localhost:5000/services/${id}`)
//         .then(() => fetchServices())
//         .catch(console.error);
//     }
//   };

//   const handleDeleteBooking = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ամրագրումը")) {
//       axios.delete(`http://localhost:5000/bookings/${id}`)
//         .then(() => fetchBookings())
//         .catch(console.error);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>Login</button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       <form style={styles.form} onSubmit={handleAdd}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={e => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.addButton}>Ավելացնել</button>
//       </form>

//       <div style={styles.listsContainer}>
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map(s => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//                 <button
//                   onClick={() => handleDeleteService(s._id)}
//                   style={styles.deleteButton}
//                 >
//                   Ջնջել
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? bookings.map(b => {
//               const sp = specialists.find(sp =>
//                 sp.firstName.toLowerCase() === b.specialist.toLowerCase() ||
//                 `${sp.firstName} ${sp.lastName}`.toLowerCase() === b.specialist.toLowerCase()
//               );

//               console.log("Booking:", b.specialist);
//               console.log("Matched specialist:", sp);

//               return (
//                 <li key={b._id} style={styles.bookingItem}>
//                   <div>
//                     <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰ {new Date(b.createdAt).toLocaleString()}
//                   </div>
//                   {sp && (
//                     <div style={styles.specialist}>
//                       👩‍🔧 Մասնագետ՝
//                       <span style={styles.specialistInfo}>
//                         <img src={sp.photo} alt={sp.firstName} style={styles.specialistPhoto} />
//                         {sp.firstName} {sp.lastName}
//                       </span>
//                     </div>
//                   )}
//                   <div>
//                     ➡️ Ծառայություններ:
//                     {b.services && b.services.length > 0 ? (
//                       <ul>
//                         {b.services.map((s,i) => (
//                           <li key={i}>{s.name} - {s.price} AMD ({s.duration} րոպե) {s.image}</li>
//                         ))}
//                       </ul>
//                     ) : " Չկան"}
//                   </div>
//                   <button
//                     onClick={() => handleDeleteBooking(b._id)}
//                     style={styles.deleteButton}
//                   >
//                     Ջնջել
//                   </button>
//                 </li>
//               );
//             }) : <p>Ամրագրումներ դեռ չկան</p>}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>Logout</button>
//     </div>
//   );
// }

// const styles = {
//   container: { padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: { display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px", margin: "0 auto 40px auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
//   input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
//   addButton: { padding: "12px", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "10px" },
//   deleteButton: { marginLeft: "15px", backgroundColor: "#ccc", color: "#fff", border: "none", borderRadius: "9px", padding: "2px 5px", cursor: "pointer", fontSize: "14px" },
//   listsContainer: { display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" },
//   listBox: { flex: "1 1 400px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", maxHeight: "600px", overflowY: "auto" },
//   listTitle: { marginBottom: "15px", color: "#222", borderBottom: "2px solid #4caf50", paddingBottom: "5px" },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: { padding: "10px", borderBottom: "1px solid #eee", fontSize: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" },
//   bookingItem: { padding: "15px", marginBottom: "15px", borderRadius: "8px", backgroundColor: "#e8f5e9", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", fontSize: "15px" },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: { display: "flex", alignItems: "center", gap: "10px", marginLeft: "8px", fontWeight: "600", color: "#2e7d32" },
//   specialistPhoto: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
// };














// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ADMIN_CREDENTIALS = { username: "admin", password: "n123" };

// export default function Admin() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [services, setServices] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", duration: "", image: "" });

//   const specialists = [
//     { id: "1", firstName: "Անահիտ", lastName: "Մելքոնյան", photo: "/images/anahit.jpg" },
//     { id: "2", firstName: "Անի", lastName: "Սահակյան", photo: "/images/ani.jpg" },
//     { id: "3", firstName: "Մերրի", lastName: "Հակոբյան", photo: "/images/cosmetology_specialist.jpg" },
//   ];

//   useEffect(() => {
//     if (loggedIn) {
//       fetchServices();
//       fetchBookings();
//     }
//   }, [loggedIn]);

//   // ✅ fetch services
//   const fetchServices = () => {
//     axios
//       .get("http://localhost:5000/services")
//       .then((res) => setServices(res.data))
//       .catch((err) => {
//         console.error("❌ Services fetch error:", err);
//       });
//   };

//   // ✅ fetch bookings
//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:5000/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => {
//         console.error("❌ Bookings fetch error:", err);
//       });
//   };

//   // ✅ add new service
//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.price || !form.duration) {
//       alert("Լրացրեք բոլոր դաշտերը");
//       return;
//     }
//     axios
//       .post("http://localhost:5000/services", {
//         name: form.name,
//         price: Number(form.price),
//         duration: Number(form.duration),
//         image: form.image,
//       })
//       .then(() => {
//         setForm({ name: "", price: "", duration: "", image: "" });
//         fetchServices();
//       })
//       .catch((err) => {
//         console.error("❌ Service add error:", err);
//         alert("Ինչ-որ սխալ տեղի ունեցավ: ստուգեք կոնսոլը");
//       });
//   };

//   // ✅ delete service
//   const handleDeleteService = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ծառայությունը")) {
//       axios
//         .delete(`http://localhost:5000/services/${id}`)
//         .then(() => fetchServices())
//         .catch((err) => console.error("❌ Service delete error:", err));
//     }
//   };

//   // ✅ delete booking
//   const handleDeleteBooking = (id) => {
//     if (window.confirm("Ցանկանո՞ւմ եք ջնջել այս ամրագրումը")) {
//       axios
//         .delete(`http://localhost:5000/bookings/${id}`)
//         .then(() => fetchBookings())
//         .catch((err) => console.error("❌ Booking delete error:", err));
//     }
//   };

//   // ✅ login check
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
//       setLoggedIn(true);
//     } else {
//       alert("❌ Username կամ password սխալ է");
//     }
//   };

//   // ------------------------
//   // Login Page
//   // ------------------------
//   if (!loggedIn) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.addButton}>
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }

//   // ------------------------
//   // Admin Panel
//   // ------------------------
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Admin Panel</h2>

//       <form style={styles.form} onSubmit={handleAdd}>
//         <input
//           placeholder="Ծառայության անուն"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Գին"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Տևողություն (րոպե)"
//           value={form.duration}
//           onChange={(e) => setForm({ ...form, duration: e.target.value })}
//           style={styles.input}
//         />
//         <input
//           placeholder="Նկարի URL"
//           value={form.image}
//           onChange={(e) => setForm({ ...form, image: e.target.value })}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.addButton}>
//           Ավելացնել
//         </button>
//       </form>

//       <div style={styles.listsContainer}>
//         {/* ✅ Services List */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Գրանցված ծառայություններ</h3>
//           <ul style={styles.list}>
//             {services.map((s) => (
//               <li key={s._id} style={styles.listItem}>
//                 {s.name} - {s.price} AMD ({s.duration} րոպե)
//                 <button
//                   onClick={() => handleDeleteService(s._id)}
//                   style={styles.deleteButton}
//                 >
//                   Ջնջել
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ Bookings List */}
//         <div style={styles.listBox}>
//           <h3 style={styles.listTitle}>Ամրագրումներ</h3>
//           <ul style={styles.list}>
//             {bookings.length > 0 ? (
//               bookings.map((b) => {
//                 const sp = specialists.find(
//                   (sp) =>
//                     sp.firstName.toLowerCase() === b.specialist?.toLowerCase() ||
//                     `${sp.firstName} ${sp.lastName}`.toLowerCase() === b.specialist?.toLowerCase()
//                 );

//                 return (
//                   <li key={b._id} style={styles.bookingItem}>
//                     <div>
//                       <strong>👤 {b.name}</strong> | 📞 {b.phone} | ⏰{" "}
//                       {new Date(b.createdAt).toLocaleString()}
//                     </div>
//                     {sp && (
//                       <div style={styles.specialist}>
//                         👩‍🔧 Մասնագետ՝
//                         <span style={styles.specialistInfo}>
//                           <img
//                             src={sp.photo}
//                             alt={sp.firstName}
//                             style={styles.specialistPhoto}
//                           />
//                           {sp.firstName} {sp.lastName}
//                         </span>
//                       </div>
//                     )}
//                     <div>
//                       ➡️ Ծառայություններ:
//                       {b.services && b.services.length > 0 ? (
//                         <ul>
//                           {b.services.map((s, i) => (
//                             <li key={i}>
//                               {s.name} - {s.price} AMD ({s.duration} րոպե)
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         " Չկան"
//                       )}
//                     </div>
//                     <button
//                       onClick={() => handleDeleteBooking(b._id)}
//                       style={styles.deleteButton}
//                     >
//                       Ջնջել
//                     </button>
//                   </li>
//                 );
//               })
//             ) : (
//               <p>Ամրագրումներ դեռ չկան</p>
//             )}
//           </ul>
//         </div>
//       </div>

//       <button onClick={() => setLoggedIn(false)} style={styles.addButton}>
//         Logout
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   title: { textAlign: "center", color: "#333", marginBottom: "30px" },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "400px",
//     gap: "10px",
//     margin: "0 auto 40px auto",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   addButton: {
//     padding: "12px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     fontSize: "16px",
//     marginTop: "10px",
//   },
//   deleteButton: {
//     marginLeft: "15px",
//     backgroundColor: "#ccc",
//     color: "#fff",
//     border: "none",
//     borderRadius: "9px",
//     padding: "2px 5px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   listsContainer: {
//     display: "flex",
//     gap: "40px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   listBox: {
//     flex: "1 1 400px",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//     maxHeight: "600px",
//     overflowY: "auto",
//   },
//   listTitle: {
//     marginBottom: "15px",
//     color: "#222",
//     borderBottom: "2px solid #4caf50",
//     paddingBottom: "5px",
//   },
//   list: { listStyle: "none", padding: "0", margin: "0" },
//   listItem: {
//     padding: "10px",
//     borderBottom: "1px solid #eee",
//     fontSize: "15px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   bookingItem: {
//     padding: "15px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     backgroundColor: "#e8f5e9",
//     boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
//     fontSize: "15px",
//   },
//   specialist: { marginTop: "8px", display: "flex", alignItems: "center" },
//   specialistInfo: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginLeft: "8px",
//     fontWeight: "600",
//     color: "#2e7d32",
//   },
//   specialistPhoto: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover",
//   },
// };

