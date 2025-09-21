// import React, { useState } from "react";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === "admin" && password === "n123") {
//       localStorage.setItem("role", "admin");
//       alert("Welcome to the Admin Panel");
//       onLoginSuccess("admin");
//     } else if (username === "user" && password === "n123") {
//       localStorage.setItem("role", "user");
//       alert("Welcome to the Booking system");
//       onLoginSuccess("user");
//     } else {
//       alert("Incorrect username or password");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Access:</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username:"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password:"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <button
          
//           onClick={handleLogin}
//           style={{
//             width: "100%",
//             padding: "8px",
//             background: "blue",
//             color: "white",
//           }}
//         >
//           Access:
//         </button>
//       </form>
//     </div>
//   );
// }



// import React, { useState } from "react";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "n123") {
//       localStorage.setItem("role", "admin");
//       alert("Welcome to the Admin Panel");
//       onLoginSuccess("admin");
//     } else if (username === "user" && password === "n123") {
//       localStorage.setItem("role", "user");
//       alert("Welcome to the Booking system");
//       onLoginSuccess("user");
//     } else {
//       alert("Incorrect username or password");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Access:</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username:"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password:"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <button
//           style={{
//             width: "100%",
//             padding: "8px",
//             background: "blue",
//             color: "white",
//           }}
//         >
//           Access
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function Login() {
//   const [form, setForm] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = () => {
//     if (form.username === "admin__" && form.password === "n123") {
//       localStorage.setItem("role", "admin"); // 👈 պահում ենք role-ը
//       alert("✅ Մուտք հաջողվեց (Admin)");
//     } else {
//       alert("❌ Սխալ մուտքանուն կամ գաղտնաբառ");
//     }
//   };

//   return (
//     <div style={container}>
//       <h2>Մուտք գործել</h2>
//       <input
//         type="text"
//         name="username"
//         placeholder="Մուտքանուն"
//         value={form.username}
//         onChange={handleChange}
//         style={inputStyle}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Գաղտնաբառ"
//         value={form.password}
//         onChange={handleChange}
//         style={inputStyle}
//       />
//       <button onClick={handleLogin} style={btnStyle}>
//         Մուտք
//       </button>
//     </div>
//   );
// }

// const container = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "30px",
// };

// const inputStyle = {
//   margin: "10px 0",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   width: "250px",
// };

// const btnStyle = {
//   background: "#FFD700",
//   border: "none",
//   padding: "10px 20px",
//   borderRadius: "8px",
//   cursor: "pointer",
//   marginTop: "10px",
// };



import React, { useState } from "react";

export default function Login({ setPage }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (form.username === "admin" && form.password === "n123") {
      localStorage.setItem("role", "admin");
      alert("✅ Login succeeded (Admin)");
      setPage("admin"); // ✅ այստեղ փոխում ենք էջը
    } else {
      alert("❌ Incorrect username or password");
    }
  };

  return (
    <div style={container}>
      <h2>Sign in</h2>

       <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Մուտքանուն"
        value={form.username}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="password"
        name="password"
        placeholder="Գաղտնաբառ"
        value={form.password}
        onChange={handleChange}
        style={inputStyle}
      />
      <button  type="submit"   onClick={handleLogin} style={btnStyle}>
        Sign in
      </button>
</form>




    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
};

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "250px",
};

const btnStyle = {
  background: "#FFD700",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};
