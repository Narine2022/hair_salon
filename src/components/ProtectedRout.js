// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, allowedRole }) {
//   const role = localStorage.getItem("role");
//   if (role !== allowedRole) {
//     return <Navigate to="/" />;
//   }
//   return children;
// }

import React from "react";

export default function ProtectedRoute({ children, allowedRole }) {
  const role = localStorage.getItem("role"); // պահում ես login-ից հետո
  if (role !== allowedRole) {
    return <p style={{ textAlign: "center", color: "red" }}>
      🚫 Մուտքը թույլատրելի չէ
    </p>;
  }
  return children;
}
