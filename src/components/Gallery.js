// import React from "react";


// const demoPhotos = [
//   "https://source.unsplash.com/400x300/?hair",
//   "https://source.unsplash.com/400x300/?makeup",
//   "https://source.unsplash.com/400x300/?nails",
//   "https://source.unsplash.com/400x300/?spa",
// ];

// export default function Gallery() {
//   return (
//     <section className="gallery">
//       <h2>📸 Մեր աշխատանքները</h2>
//       <div className="gallery-grid">
//         {demoPhotos.map((src, idx) => (
//           <img key={idx} src={src} alt={`work-${idx}`} />
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


import React from "react";

export default function Gallery() {
  const images = [
    "/images/haircut.jpg",
    "/images/manicure.jpg",
    "/images/makeup.jpg",
    "/images/cosmetology.jpg",
    "/images/hairStyle.jpg",
   

  ];

  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
       Our Services
      </h2>
      <div style={gridStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "15px",
};