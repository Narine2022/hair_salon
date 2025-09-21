// import React, { useState } from "react";

// export default function SubServiceList({ service, onProceed, onBack }) {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const toggleSelect = (name) => {
//     setSelectedIds((prev) =>
//       prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
//     );
//   };

//   const handleContinue = () => {
//     const selected = service.subServices.filter((s) =>
//       selectedIds.includes(s.name)
//     );
//     onProceed(selected); // 📌 ուղարկում ենք BookingForm-ին
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>{service.name} → Ենթածառայություններ</h2>
//       <button onClick={onBack} style={{ margin: "10px" }}>⬅️ Վերադառնալ</button>

//       <div className="subservices">
//         {service.subServices.length > 0 ? (
//           service.subServices.map((sub, idx) => (
//             <div key={idx} className="sub-card">
//               <h3>{sub.name}</h3>
//               <p>Գին: {sub.price} AMD</p>
//               <p>Տևողություն: {sub.duration} րոպե</p>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(sub.name)}
//                   onChange={() => toggleSelect(sub.name)}
//                 />{" "}
//                 Ընտրել
//               </label>
//             </div>
//           ))
//         ) : (
//           <p>Ենթածառայություններ հասանելի չեն</p>
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






// import React, { useState } from "react";

// export default function SubServiceList({ service, onProceed, onBack }) {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const toggleSelect = (name) => {
//     setSelectedIds((prev) =>
//       prev.includes(name)
//         ? prev.filter((n) => n !== name)
//         : [...prev, name]
//     );
//   };

//   const handleContinue = () => {
//     const selected = (service.subServices || []).filter((s) =>
//       selectedIds.includes(s.name)
//     );
//     onProceed(selected); // 📌 ուղարկում ենք BookingForm-ին
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>
//         {service.name} → Ենթածառայություններ
//       </h2>

//       <button onClick={onBack} style={{ margin: "10px" }}>
//         ⬅️ Վերադառնալ
//       </button>

//       <div className="subservices">
//         {service.subServices && service.subServices.length > 0 ? (
//           service.subServices.map((sub, _id) => (
//             <div key={_id} className="sub-card">
//               <h3>{sub.name}</h3>
//               <p>Գին: {sub.price} AMD</p>
//               <p>Տևողություն: {sub.duration} րոպե</p>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(sub.name)}
//                   onChange={() => toggleSelect(sub.name)}
//                 />{" "}
//                <button >Ընտրել</button> 
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ենթածառայություններ հասանելի չեն</p>
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




// import React, { useState } from "react";

// export default function SubServiceList({ service, onProceed, onBack }) {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const toggleSelect = (index) => {
//     setSelectedIds((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const handleContinue = () => {
//     const selected = (service.subServices || []).filter((_, i) =>
//       selectedIds.includes(i)
//     );
//     onProceed(selected);
//   };

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>
//         {service.name} → Ենթածառայություններ
//       </h2>
//       <button onClick={onBack} style={{ margin: "10px" }}>
//         ⬅️ Վերադառնալ
//       </button>

//       <div className="subservices">
//         {service.subServices && service.subServices.length > 0 ? (
//           service.subServices.map((sub, i) => (
//             <div key={i} className="sub-card">
//               <h3>{sub.name}</h3>
//               <p>Գին: {sub.price} AMD</p>
//               <p>Տևողություն: {sub.duration} րոպե</p>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedIds.includes(i)}
//                   onChange={() => toggleSelect(i)}
//                 />{" "}
//                 Ընտրել
//               </label>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: "center" }}>Ենթածառայություններ հասանելի չեն</p>
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













// // SubServiceList.jsx
// import React, { useState } from "react";

// export default function SubServiceList({ service, onProceed, onBack }) {
//   const [selected, setSelected] = useState([]);

//   const toggle = (i) => {
//     setSelected((prev) =>
//       prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
//     );
//   };

//   return (
//     <div>
//       <h2>{service.name} → Ենթածառայություններ</h2>
//       <button onClick={onBack}>⬅️ Վերադառնալ</button>
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {service.subServices.map((sub, i) => (
//           <div
//             key={i}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//               width: "150px",
//             }}
//           >
//             <img
//               src={sub.image}
//               alt={sub.name}
//               style={{ width: "100%", borderRadius: "8px" }}
//             />
//             <h4>{sub.name}</h4>
//             <p>{sub.price} AMD</p>
//             <p>{sub.duration} րոպե</p>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selected.includes(i)}
//                 onChange={() => toggle(i)}
//               />{" "}
//               Ընտրել
//             </label>
//           </div>
//         ))}
//       </div>
//       {selected.length > 0 && (
//         <button onClick={() => onProceed(selected.map((i) => service.subServices[i]))}>
//           Շարունակել ({selected.length})
//         </button>
//       )}
//     </div>
//   );
// }









// import React, { useState } from "react";

// export default function SubServiceList({ service, onProceed, onBack }) {
//   const [selected, setSelected] = useState([]);

//   const toggle = (i) => {
//     setSelected((prev) =>
//       prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
//     );
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           fontSize: "28px",
//           color: "#333",
//           animation: "fadeInDown 0.6s ease",
//         }}
//       >
//         {service.name} → Ենթածառայություններ
//       </h2>

//       <button
//         onClick={onBack}
//         style={{
//           display: "block",
//           margin: "0 auto 30px auto",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           border: "none",
//           backgroundColor: "#ff5252",
//           color: "#fff",
//           fontSize: "16px",
//           cursor: "pointer",
//           transition: "transform 0.2s, background-color 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.05)";
//           e.currentTarget.style.backgroundColor = "#e53935";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.backgroundColor = "#ff5252";
//         }}
//       >
//         ⬅️ Վերադառնալ
//       </button>

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           animation: "fadeInUp 0.8s ease",
//         }}
//       >
//         {service.subServices.map((sub, i) => (
//           <div
//             key={i}
//             style={{
//               border: selected.includes(i)
//                 ? "2px solid #4caf50"
//                 : "1px solid #ccc",
//               padding: "15px",
//               borderRadius: "12px",
//               width: "200px",
//               textAlign: "center",
//               boxShadow: selected.includes(i)
//                 ? "0 6px 18px rgba(76, 175, 80, 0.5)"
//                 : "0 4px 12px rgba(0,0,0,0.1)",
//               transition:
//                 "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
//               transform: selected.includes(i) ? "scale(1.05)" : "scale(1)",
//             }}
//           >
//             <img
//               src={sub.image}
//               alt={sub.name}
//               style={{
//                 width: "100%",
//                 height: "120px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 marginBottom: "10px",
//                 transition: "transform 0.3s",
//               }}
//             />
//             <h4 style={{ margin: "10px 0 5px 0", fontSize: "18px" }}>
//               {sub.name}
//             </h4>
//             <p style={{ margin: "5px 0", color: "#444" }}>{sub.price} AMD</p>
//             <p style={{ margin: "5px 0", color: "#777" }}>
//               {sub.duration} րոպե
//             </p>
//             <label style={{ display: "block", marginTop: "10px" }}>
//               <input
//                 type="checkbox"
//                 checked={selected.includes(i)}
//                 onChange={() => toggle(i)}
//                 style={{ marginRight: "6px" }}
//               />
//               Ընտրել
//             </label>
//           </div>
//         ))}
//       </div>

//       {selected.length > 0 && (
//         <button
//           onClick={() =>
//             onProceed(selected.map((i) => service.subServices[i]))
//           }
//           style={{
//             display: "block",
//             margin: "30px auto 0 auto",
//             padding: "12px 25px",
//             borderRadius: "8px",
//             border: "none",
//             backgroundColor: "#4caf50",
//             color: "#fff",
//             fontSize: "18px",
//             cursor: "pointer",
//             transition: "transform 0.2s, background-color 0.3s",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.05)";
//             e.currentTarget.style.backgroundColor = "#43a047";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.backgroundColor = "#4caf50";
//           }}
//         >
//           Շարունակել ({selected.length})
//         </button>
//       )}

//       {/* CSS Animations */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeInDown {
//             from { opacity: 0; transform: translateY(-20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function SubServiceList({ service, onProceed, onBack }) {
  const [selected, setSelected] = useState([]);

  const toggle = (i) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      {/* Ծառայության անունը */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px",
          color: "#333",
          animation: "fadeInDown 0.6s ease",
        }}
      >
        {service.name} 
      </h2>

      {/* Ծառայության գլխավոր նկարը */}
      {service.image && (
        <img
          src={service.image}
          alt={service.name}
          style={{
            display: "block",
            margin: "0 auto 30px auto",
            width: "250px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      )}

      {/* Վերադառնալ կոճակ */}
      <button
        onClick={onBack}
        style={{
          display: "block",
          margin: "0 auto 30px auto",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4caf50",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          transition: "transform 0.2s, background-color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.backgroundColor = "#43a047";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#43a047";
        }}
      >
        ⬅️ Go back
      </button>

      {/* Ենթածառայություններ */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeInUp 0.8s ease",
        }}
      >
        {service.subServices.map((sub, i) => (
          <div
            key={i}
            style={{
              border: selected.includes(i)
                ? "2px solid #4caf50"
                : "1px solid #ccc",
              padding: "15px",
              borderRadius: "12px",
              width: "200px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: selected.includes(i)
                ? "0 6px 18px rgba(76, 175, 80, 0.5)"
                : "0 4px 12px rgba(0,0,0,0.1)",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
              transform: selected.includes(i) ? "scale(1.05)" : "scale(1)",
            }}
          >
            {/* Նկարը */}
          

            <h4 style={{ margin: "10px 0 5px 0", fontSize: "18px" }}>
              {sub.name}
            </h4>

 {sub.image  && (
              <img
                src={sub.image}
                alt={sub.name}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}

            <p style={{ margin: "5px 0", color: "#444" }}>{sub.price} AMD</p>
            <p style={{ margin: "5px 0", color: "#777" }}>
              {sub.duration} minute
            </p>

            {/* Ընտրել checkbox */}
            <label style={{ display: "block", marginTop: "10px" }}>
              <input
                type="checkbox"
                checked={selected.includes(i)}
                onChange={(e) => {
                  e.stopPropagation();
                  toggle(i);
                }}
                style={{ marginRight: "6px" }}
              />
             Choose:
            </label>
          </div>
        ))}
      </div>

      {/* Շարունակել */}
      {selected.length > 0 && (
        <button
          onClick={() =>
            onProceed(selected.map((i) => service.subServices[i]))
          }
          style={{
            display: "block",
            margin: "30px auto 0 auto",
            padding: "12px 25px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#43a047";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#4caf50";
          }}
        >
          Continue ({selected.length})
        </button>
      )}

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
