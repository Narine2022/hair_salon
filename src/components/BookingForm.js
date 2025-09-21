

// import React, { useState } from "react";

// export default function BookingForm({ services, onBack }) {
//   const [form, setForm] = useState({ name: "", phone: "", specialist: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = {
//       ...form,
//       services: services.map((s) => ({
//         name: s.name,
//         price: s.price,
//         duration: s.duration,
//       })),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/Bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!res.ok) throw new Error("❌ Ամրագրումը չհաջողվեց");

//       alert(`
//         ✅ Ամրագրումը հաջողությամբ կատարվեց!\n\n${JSON.stringify(
//           bookingData,
//           null,
//           2
//         )}
//       `);

//       setForm({ name: "", phone: "", specialist: "" });
//       onBack();
//     } catch (err) {
//       console.error("❌ Error booking:", err);
//       alert("❌ Սխալ տեղի ունեցավ ամրագրելու ժամանակ");
//     }
//   };

//   return (
//     <div className="booking-form" style={container}>
//       <h2>Ամրագրում</h2>
//       <button onClick={onBack} style={backBtn}>
//         ⬅️ Վերադառնալ
//       </button>

//       <ul>
//         {services.length > 0 ? (
//           services.map((s, idx) => (
//             <li key={idx}>
//               {s.name} {s.price ? `- ${s.price} AMD` : ""}
//             </li>
//           ))
//         ) : (
//           <p>Ծառայությունը ընտրված չէ</p>
//         )}
//       </ul>

//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Անուն Ազգանուն"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="tel"
//           placeholder="Հեռախոս"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           placeholder="Ընտրեք մասնագետ"
//           value={form.specialist}
//           onChange={(e) => setForm({ ...form, specialist: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <button type="submit" style={btnStyle}>
//           Ամրագրել
//         </button>
//       </form>
//     </div>
//   );
// }

// const container = {
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   margin: "20px auto",
//   background: "#fafafa",
// };

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
// };

// const inputStyle = {
//   margin: "10px 0",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// const btnStyle = {
//   background: "#FFD700",
//   border: "none",
//   padding: "10px",
//   borderRadius: "8px",
//   cursor: "pointer",
// };

// const backBtn = {
//   marginBottom: "10px",
//   cursor: "pointer",
// };



import React, { useState } from "react";

export default function BookingForm({ services, onBack }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    specialistId: "",
    date: "",
    time: "",
  });

  const specialists = [
    {
      id: 1,
      firstName: "Անահիտ",
      lastName: "Մելքոնյան",
      photo: "./images/anahit.jpg",
    },
    {
      id: 2,
      firstName: "Անի",
      lastName: "Սահակյան",
      photo: "./images/ani.jpg",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      ...form,
      services: services.map((s) => ({
        name: s.name,
        price: s.price,
        duration: s.duration,
      })),
    };

    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) throw new Error("❌ Ամրագրումը չհաջողվեց");

      setForm({ name: "", phone: "", specialistId: "", date: "", time: "" });
      setSuccessMessage(bookingData);
    } catch (err) {
      console.error("❌ Error booking:", err);
      alert("❌ Սխալ տեղի ունեցավ ամրագրելու ժամանակ");
    }
  };

  // ✅ Պравильная проверка
  const selectedSpecialist = specialists.find(
    (sp) => sp.id.toString() === successMessage?.specialistId?.toString()
  );

  return (
    <div className="booking-form" style={container}>
      <h2>Ամրագրում</h2>
      <button onClick={onBack} style={backBtn}>
        ⬅️ Վերադառնալ
      </button>

      <ul>
        {services.length > 0 ? (
          services.map((s, idx) => (
            <li key={idx}>
              {s.name} {s.price ? `- ${s.price} AMD` : ""}
            </li>
          ))
        ) : (
          <p>Ծառայությունը ընտրված չէ</p>
        )}
      </ul>

      {successMessage && (
        <div style={successBox}>
          <p><strong>Անուն:</strong> {successMessage.name}</p>
          <p><strong>Հեռախոս:</strong> {successMessage.phone}</p>
          <p><strong>Օր:</strong> {successMessage.date}</p>
          <p><strong>Ժամ:</strong> {successMessage.time}</p>

          {selectedSpecialist && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={selectedSpecialist.photo}
                alt={`${selectedSpecialist.firstName} ${selectedSpecialist.lastName}`}
                style={{ width: 50, height: 50, borderRadius: "50%" }}
              />
              <p>
                {selectedSpecialist.firstName} {selectedSpecialist.lastName}
              </p>
            </div>
          )}

          <p><strong>Ծառայություններ:</strong></p>
          <ul>
            {successMessage.services.map((s, idx) => (
              <li key={idx}>
                {s.name} - {s.price} դրամ ({s.duration} րոպե)
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              setSuccessMessage(null);
              onBack();
            }}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ✅ Լավ է / Փակել
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Անուն Ազգանուն"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Հեռախոս"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          style={inputStyle}
        />

        <select
          value={form.specialistId}
          onChange={(e) => setForm({ ...form, specialistId: e.target.value })}
          required
        >
          <option value="">Ընտրեք մասնագետ</option>
          {specialists.map((sp) => (
            <option key={sp.id} value={sp.id}>
              {sp.firstName} {sp.lastName}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>
          Ամրագրել
        </button>
      </form>
    </div>
  );
}

const container = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  maxWidth: "400px",
  margin: "20px auto",
  background: "#fafafa",
};
const formStyle = { display: "flex", flexDirection: "column" };
const inputStyle = { margin: "10px 0", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" };
const btnStyle = { background: "#FFD700", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer" };
const backBtn = { marginBottom: "10px", cursor: "pointer" };
const successBox = { background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: "10px", borderRadius: "5px", marginTop: "15px" };
















// import React, { useState } from "react";

// export default function BookingForm({ services, onBack }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     specialist: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = {
//       ...form,
//       services: services.map((s) => ({
//         name: s.name,
//         price: s.price,
//         duration: s.duration,
//         parentService: s.parentService || null,
//       })),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!res.ok) throw new Error("❌ Ամրագրումը չհաջողվեց");

//       alert("✅ Ամրագրումը հաջողությամբ կատարվեց!");
//       setForm({ name: "", phone: "", specialist: "" });
//       onBack();
//     } catch (err) {
//       console.error("❌ Error booking:", err);
//       alert("❌ Սխալ տեղի ունեցավ ամրագրելու ժամանակ");
//     }
//   };

//   return (
//     <div className="booking-form" style={container}>
//       <h2>Ամրագրում</h2>

//       <button onClick={onBack} style={backBtn}>
//         ⬅️ Վերադառնալ
//       </button>

//       <ul>
//         {services.length > 0 ? (
//           services.map((s, idx) => (
//             <li key={idx}>
//               {s.parentService ? (
//                 <>
//                   {s.parentService} → {s.name} - {s.price} AMD
//                 </>
//               ) : (
//                 <>
//                   {s.name} - {s.price} AMD
//                 </>
//               )}
//             </li>
//           ))
//         ) : (
//           <p>Ծառայությունը ընտրված չէ</p>
//         )}
//       </ul>

//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Անուն Ազգանուն"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="tel"
//           placeholder="Հեռախոս"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           placeholder="Ընտրեք մասնագետ"
//           value={form.specialist}
//           onChange={(e) => setForm({ ...form, specialist: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <button type="submit" style={btnStyle}>
//           Ամրագրել
//         </button>
//       </form>
//     </div>
//   );
// }

// const container = {
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   margin: "20px auto",
//   background: "#fafafa",
// };

// const formStyle = { display: "flex", flexDirection: "column" };

// const inputStyle = {
//   margin: "10px 0",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// const btnStyle = {
//   background: "#FFD700",
//   border: "none",
//   padding: "10px",
//   borderRadius: "8px",
//   cursor: "pointer",
// };

// const backBtn = { marginBottom: "10px", cursor: "pointer" };



















// import React, { useState } from "react";

// export default function BookingForm({ services, onBack }) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     specialistId: "",
//     date: "",
//     time: "",
//   });

//   const specialists = [
//     {
//       id: 1,
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "./images/anahit.jpg",
//     },
//     {
//       id: 2,
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "./images/ani.jpg",
//     },
//      { id: 3, 
//       firstName: "Մերրի", 
//       lastName: "Հակոբյան",
//       photo: "/images/cosmetology_specialist.jpg" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(form);
//     // const bookingData = {
//     //   ...form,
//     //   services: services.map((s) => ({
//     //     name: s.name,
//     //     price: s.price,
//     //     duration: s.duration,
//     //   })),
//     // };

// const selectedSp = specialists.find(sp => sp.id.toString() === form.specialistId.toString());

// const bookingData = {
//   ...form,
//   specialist: selectedSp ? `${selectedSp.firstName} ${selectedSp.lastName}` : "",
//   services: services.map((s) => ({
//     name: s.name,
//     price: s.price,
//     duration: s.duration,
//   })),
// };
// delete bookingData.specialistId; // որ սխալ չպահվի




//     try {
//       const res = await fetch("http://localhost:5000/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!res.ok) throw new Error("❌Reservation failed.");

//       setForm({ name: "", phone: "", specialistId: "", date: "", time: "" });
//       setSuccessMessage(bookingData);
//     } catch (err) {
//       console.error("❌ Error booking:", err);
//       alert("❌ An error occurred while booking.");
//     }
//   };

//   // ✅ Պравильная проверка
//   const selectedSpecialist = specialists.find(
//     (sp) => sp.id.toString() === successMessage?.specialistId?.toString()
//   );

//   return (
//     <div className="booking-form" style={container}>
//       <h2>Reservation</h2>
//       <button onClick={onBack} style={backBtn}>
//         ⬅️ Back
//       </button>

//       <ul>
//         {services.length > 0 ? (
//           services.map((s, idx) => (
//             <li key={idx}>
//               {s.name} {s.price ? `- ${s.price} AMD` : ""}
//             </li>
//           ))
//         ) : (
//           <p>Service not selected</p>
//         )}
//       </ul>

//       {successMessage && (
//         <div style={successBox}>
//           <p><strong>Name:</strong> {successMessage.name}</p>
//           <p><strong>Phone:</strong> {successMessage.phone}</p>
//           <p><strong>Day:</strong> {successMessage.date}</p>
//           <p><strong>Time:</strong> {successMessage.time}</p>

//           {selectedSpecialist && (
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <img
//                 src={selectedSpecialist.photo}
//                 alt={`${selectedSpecialist.firstName} ${selectedSpecialist.lastName}`}
//                 style={{ width: 50, height: 50, borderRadius: "50%" }}
//               />
//               <p>
//                 {selectedSpecialist.firstName} {selectedSpecialist.lastName}
//               </p>
//             </div>
//           )}

//           <p><strong>Services:</strong></p>
//           <ul>
//             {successMessage.services.map((s, idx) => (
//               <li key={idx}>
//                 {s.name} - {s.price} AMD ({s.duration} minute)
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={() => {
//               setSuccessMessage(null);
//               onBack();
//             }}
//             style={{
//               marginTop: "10px",
//               padding: "8px 16px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             ✅ Okay / Close
//           </button>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Անուն Ազգանուն"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="tel"
//           placeholder="Հեռախոս"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           required
//           style={inputStyle}
//         />

//         <select
//           value={form.specialistId}
//           onChange={(e) => setForm({ ...form, specialistId: e.target.value })}
//           required
//         >
//           <option value="">Choose a specialist</option>
//           {specialists.map((sp) => (
//             <option key={sp._id} value={sp._id}>
//               {sp.firstName} {sp.lastName}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="time"
//           value={form.time}
//           onChange={(e) => setForm({ ...form, time: e.target.value })}
//           required
//           style={inputStyle}
//         />
// {/* onClick={onBack} */}
//         <button   type="submit" style={btnStyle}>
//           Reserve
//         </button>
//       </form>
//     </div>
//   );
// }

// const container = {
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   margin: "20px auto",
//   background: "#fafafa",
// };
// const formStyle = { display: "flex", flexDirection: "column" };
// const inputStyle = { margin: "10px 0", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" };
// const btnStyle = { background: "#FFD700", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer" };
// const backBtn = { marginBottom: "10px", cursor: "pointer" };
// const successBox = { background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: "10px", borderRadius: "5px", marginTop: "15px" };













// import React, { useState } from "react";

// export default function BookingForm({ services, onBack }) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     specialistId: "",
//     date: "",
//     time: "",
//   });

//   const specialists = [
//     {
//       id: 1,
//       firstName: "Անահիտ",
//       lastName: "Մելքոնյան",
//       photo: "./images/anahit.jpg",
//     },
//     {
//       id: 2,
//       firstName: "Անի",
//       lastName: "Սահակյան",
//       photo: "./images/ani.jpg",
//     },
//     { id: 3,
//       firstName: "Մերրի",
//       lastName: "Հակոբյան",
//       photo: "/images/cosmetology_specialist.jpg" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const selectedSp = specialists.find(
//       (sp) => sp.id.toString() === form.specialistId.toString()
//     );

//     const bookingData = {
      
//       ...form,
//       specialist: selectedSp
//     ? {
//         name: `${selectedSp.firstName} ${selectedSp.lastName}`,
//         role: selectedSp.lastName.includes("Վարսահարդար")
//           ? "Hair stylist"
//           : selectedSp.lastName.includes("Դիմահարդար")
//           ? "Makeup artist"
//           : "Cosmetologist",
//         photo: selectedSp.photo
//       }
//     : null,
//       services: services.map((s) => ({
//         name: s.name,
//         price: s.price,
//         duration: s.duration,
//       })),
//     };
//     delete bookingData.specialistId;

//     try {
//       const res = await fetch("http://localhost:5000/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!res.ok) throw new Error("❌ Ամրագրումը չհաջողվեց");

//       setForm({ name: "", phone: "", specialistId: "", date: "", time: "" });
//       setSuccessMessage({ ...bookingData, specialistId: form.specialistId });
//     } catch (err) {
//       console.error("❌ Error booking:", err);
//       alert("❌ Սխալ տեղի ունեցավ ամրագրելու ժամանակ");
//     }
//   };

//   const selectedSpecialist = specialists.find(
//     (sp) => sp.id.toString() === successMessage?.specialistId?.toString()
//   );

//   return (
//     <div style={container}>
//       <h2>Ամրագրում</h2>
//       <button onClick={onBack} style={backBtn}>
//         ⬅️ Վերադառնալ
//       </button>

//       <ul>
//         {services.length > 0 ? (
//           services.map((s, idx) => (
//             <li key={idx}>
//               {s.name} {s.price ? `- ${s.price} AMD` : ""}
//             </li>
//           ))
//         ) : (
//           <p>Ծառայությունը ընտրված չէ</p>
//         )}
//       </ul>

//       {successMessage && (
//         <div style={successBox}>
//           <p><strong>Անուն:</strong> {successMessage.name}</p>
//           <p><strong>Հեռախոս:</strong> {successMessage.phone}</p>
//           <p><strong>Օր:</strong> {successMessage.date}</p>
//           <p><strong>Ժամ:</strong> {successMessage.time}</p>

//           {selectedSpecialist && (
//             <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
//               <img
//                 src={selectedSpecialist.photo}
//                 alt={`${selectedSpecialist.firstName} ${selectedSpecialist.lastName}`}
//                 style={{ width: 50, height: 50, borderRadius: "50%" }}
//               />
//               <p>
//                 {selectedSpecialist.firstName} {selectedSpecialist.lastName}
//               </p>
//             </div>
//           )}

//           <p><strong>Ծառայություններ:</strong></p>
//           <ul>
//             {successMessage.services.map((s, idx) => (
//               <li key={idx}>
//                 {s.name} - {s.price} դրամ ({s.duration} րոպե )
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={() => {
//               setSuccessMessage(null);
//               onBack();
//             }}
//             style={closeBtn}
//           >
//             ✅ Լավ է / Փակել
//           </button>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Անուն Ազգանուն"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="tel"
//           placeholder="Հեռախոս"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           required
//           style={inputStyle}
//         />

//         <select
//           value={form.specialistId}
//           onChange={(e) => setForm({ ...form, specialistId: e.target.value })}
//           required
//           style={inputStyle}
//         >
//           <option value="">Ընտրեք մասնագետ</option>
//           {specialists.map((sp) => (
//             <option key={sp.id} value={sp.id}>
//               {sp.firstName} {sp.lastName}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           required
//           style={inputStyle}
//         />
//         <input
//           type="time"
//           value={form.time}
//           onChange={(e) => setForm({ ...form, time: e.target.value })}
//           required
//           style={inputStyle}
//         />

//         <button type="submit" style={btnStyle}>
//           Ամրագրել
//         </button>
//       </form>
//     </div>
//   );
// }

// const container = {
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   margin: "20px auto",
//   background: "#fafafa",
// };
// const formStyle = { display: "flex", flexDirection: "column" };
// const inputStyle = { margin: "10px 0", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" };
// const btnStyle = { background: "#FFD700", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer" };
// const backBtn = { marginBottom: "10px", cursor: "pointer" };
// const successBox = { background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: "10px", borderRadius: "5px", marginTop: "15px" };
// const closeBtn = { marginTop: "10px", padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

















