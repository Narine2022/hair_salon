// import React, { useState } from "react";
// import "../App.css";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [text, setText] = useState("");

//   const addPost = () => {
//     if (!text.trim()) return;
//     setPosts([{ id: Date.now(), text }, ...posts]);
//     setText("");
//   };

//   return (
//     <section className="blog">
//       <h2>📝 Գրառումներ</h2>
//       <textarea
//         placeholder="Գրեք նոր գրառում..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={addPost}>Ավելացնել գրառում</button>

//       <div className="posts">
//         {posts.map((p) => (
//           <div key={p.id} className="post">
//             {p.text}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }















// import React, { useState } from "react";
// import "../App.css";

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [text, setText] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const addPost = () => {
//     if (!text.trim()) return;

//     if (editingId) {
//       setPosts(posts.map(p => p.id === editingId ? { ...p, text } : p));
//       setEditingId(null);
//     } else {
//       setPosts([{ id: Date.now(), text }, ...posts]);
//     }
//     setText("");
//   };

//   const deletePost = (id) => setPosts(posts.filter(p => p.id !== id));
//   const editPost = (post) => {
//     setText(post.text);
//     setEditingId(post.id);
//   };

//   return (
//     <section className="blog">
//       <h2>📝 Գրառումներ</h2>
//       <textarea
//         placeholder="Գրեք նոր գրառում..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={addPost}>{editingId ? "Պահպանել" : "Ավելացնել գրառում"}</button>

//       <div className="posts">
//         {posts.map((p) => (
//           <div key={p.id} className="post">
//             {p.text}
//             <div>
//               <button onClick={() => editPost(p)}>✏️ Փոփոխել</button>
//               <button onClick={() => deletePost(p.id)}>🗑️ Ջնջել</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






















// import React from "react";

// export default function Blog() {
//   const posts = [
//     {
//       title: "Մազերի խնամքի 5 գաղտնիք",
//       text: "Կանոնավոր խնամքը և ճիշտ արտադրանքը կարևոր են առողջ մազերի համար։",
//     },
//     {
//       title: "Ինչպես ընտրել դիմահարդարում երեկույթի համար",
//       text: "Ձեր դիմահարդարումը պետք է ընդգծի ձեր բնական գեղեցկությունը։",
//     },
//     {
//       title: "Մատնահարդարման նոր միտումները",
//       text: "Այս տարվա նորաձև գույներն ու դիզայնները այստեղ են։",
//     },
//   ];

//   return (
//     <section style={{ padding: "40px", background: "#f7f7f7" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Բլոգ</h2>
//       <div style={gridStyle}>
//         {posts.map((p, i) => (
//           <div key={i} style={cardStyle}>
//             <h3>{p.title}</h3>
//             <p>{p.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//   gap: "20px",
// };

// const cardStyle = {
//   background: "#fff",
//   padding: "20px",
//   borderRadius: "10px",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// };


import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "5 secrets of hair care",
      text: "Regular care and the right products are essential for healthy hair.",
    },
    {
      title: "How to choose makeup for a party",
      text: "Your makeup should emphasize your natural beauty.",
    },
    {
      title: "New manicure trends",
      text: "This year's trendy colors and designs are here.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Blog:</h2>
      <div style={gridStyle}>
        {posts.map((p, i) => (
          <div
            key={i}
            className="blog-card"
            style={{ animationDelay: `${i * 0.2}s` }} // stagger animation
          >
            <h3 style={cardTitleStyle}>{p.title}</h3>
            <p style={cardTextStyle}>{p.text}</p>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .blog-card {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transform: translateY(20px);
            opacity: 0;
            animation: fadeInUp 0.6s forwards;
            transition: all 0.3s ease;
          }

          .blog-card:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          @keyframes fadeInUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
}

// Styles
const sectionStyle = {
  padding: "40px",
  background: "#f5f7f7",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "32px",
  color: "#333",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const cardTitleStyle = {
  marginBottom: "10px",
  fontSize: "20px",
  color: "#222",
};

const cardTextStyle = {
  color: "#355",
  lineHeight: "1.5",
};
