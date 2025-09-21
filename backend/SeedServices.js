// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb://127.0.0.1:27017/hairsalon");

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg"
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     image: "https://i.ibb.co/DbPQc4M/manicure.jpg"
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     image: "https://i.ibb.co/fXmmKgF/makeup.jpg"
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg"
//   }
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// }

// seed();

// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb://127.0.0.1:27017/hairsalon");

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg",
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     image: "https://i.ibb.co/DbPQc4M/manicure.jpg",
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     image: "https://i.ibb.co/fXmmKgF/makeup.jpg",
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg",
//   },
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// }

// seed();




// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb://127.0.0.1:27017/hairsalon");

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg",
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     image: "https://i.ibb.co/DbPQc4M/manicure.jpg",
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     image: "https://i.ibb.co/fXmmKgF/makeup.jpg",
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg",
//   },
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// }

// seed();



// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/");

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg"
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     image: "https://i.ibb.co/DbPQc4M/manicure.jpg"
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     image: "https://i.ibb.co/fXmmKgF/makeup.jpg"
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg"
//   }
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// }

// seed();


// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb+srv://admin:n123@salon.rqgzqen.mongodb.net/");

// const services = [
//   { name: "Վարսահարդարում", image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg" },
//   { name: "Մատնահարդարում", image: "https://i.ibb.co/DbPQc4M/manicure.jpg" },
//   { name: "Դիմահարդարում", image: "https://i.ibb.co/fXmmKgF/makeup.jpg" },
//   { name: "Կոսմետոլոգիա", image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg" },
//   // 👇 օրինակ ենթածառայություններ
//   { name: "Կարճ սանրվածք", price: 5000, duration: 30, parent: "Վարսահարդարում" },
//   { name: "Երկար սանրվածք", price: 8000, duration: 45, parent: "Վարսահարդարում" }
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// }
// seed();


// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// // ⚠️ փոխիր քո MongoDB Atlas URI-ն այստեղ
// const MONGO_URI = "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon";

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg",
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     image: "https://i.ibb.co/DbPQc4M/manicure.jpg",
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     image: "https://i.ibb.co/fXmmKgF/makeup.jpg",
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg",
//   },
// ];

// async function seed() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB connected");

//     await Service.deleteMany({});
//     await Service.insertMany(services);

//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error seeding services:", err);
//     mongoose.connection.close();
//   }
// }

// seed();





// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// mongoose.connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon")
//   .then(() => console.log("✅ MongoDB connected for seeding"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// const services = [
//   {
//     name: "Վարսահարդարում",
//     price: 7000,
//     duration: 45,
//     // image: "https://i.ibb.co/5M4G4Pz/hairdressing.jpg"
//     image: "images/hairdressing.jpg"
//   },
//   {
//     name: "Մատնահարդարում",
//     price: 5000,
//     duration: 60,
//     // image: "https://i.ibb.co/DbPQc4M/manicure.jpg"
//     image: "images/manicure.jpg"
//   },
//   {
//     name: "Դիմահարդարում",
//     price: 10000,
//     duration: 60,
//     // image: "https://i.ibb.co/fXmmKgF/makeup.jpg"
//      image: "images/makeup.jpg"
//   },
//   {
//     name: "Կոսմետոլոգիա",
//     price: 15000,
//     duration: 90,
//     // image: "https://i.ibb.co/8XMS5kj/cosmetology.jpg"
//      image: "/images/cosmetology.jpg"
//   }
// ];

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     await Service.insertMany(services);
//     console.log("✅ Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error seeding:", err);
//   }
// }

// seed();


// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// // 🔌 Connect MongoDB Atlas
// mongoose
//   .connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon", {
//     dbName: "hairsalon",
//   })
//   .then(() => console.log("✅ MongoDB connected for seeding"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 🔄 Seed data
// async function seed() {
//   try {
//     await Service.deleteMany({});
//     console.log("🗑️ All old services removed");

//     await Service.insertMany([
//       {
//         name: "Cosmetology",
//         price: 10000,
//         duration: 15,
//         image: "/images/cosmetology.jpg", // ✅ local image
//       },
//       {
//         name: "Manicure",
//         price: 5000,
//         duration: 60,
//         image: "/images/manicure.jpg",
//       },
      
//       {
//         name: "haircut",
//         price: 5000,
//         duration: 40,
//         image: "./images/haircut.jpg",
//         subServices: [
//     { name: "Eye makeup", price: 5000, duration: 15 },
//     { name: "Bridal makeup", price: 25000, duration: 60 }
//   ]
//       },
          
//       {
//         name: "hairstyle",
//         price: 15000,
//         duration: 40,
//         image: "./images/hairstyle.jpg",
//       },
//        {
//         name: "makeup",
//         price: 15000,
//         duration: 40,
//         image: "./images/makeup.jpg",
//       },

//     ]);

//     console.log("🌱 Services seeded successfully!");
//   } catch (err) {
//     console.error("❌ Error seeding services:", err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seed();



// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// // 🔌 Connect MongoDB Atlas
// mongoose
//   .connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon", {
//     dbName: "hairsalon",
//   })
//   .then(() => console.log("✅ MongoDB connected for seeding"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 🔄 Seed data
// async function seed() {
//   try {
//     // 1️⃣ Ջնջում ենք հին տվյալները
//     await Service.deleteMany({});
//     console.log("🗑️ All old services removed");

//     // 2️⃣ Seed services
//     const services = [
//       {
//         name: "Cosmetology",
//         price: 10000,
//         duration: 15,
//         image: "/images/cosmetology.jpg",
//         subServices: [
//           { name: "Facial", price: 7000, duration: 15 },
//           { name: "Acne treatment", price: 12000, duration: 20 },
//         ],
//       },
//       {
//         name: "Manicure",
//         price: 5000,
//         duration: 60,
//         image: "/images/manicure.jpg",
//         subServices: [
//           { name: "Classic manicure", price: 5000, duration: 40 },
//           { name: "Gel manicure", price: 8000, duration: 60 },
//         ],
//       },
//       {
//         name: "Haircut",
//         price: 5000,
//         duration: 40,
//         image: "./images/haircut.jpg",
//         subServices: [
//           { name: "Men's haircut", price: 3000, duration: 20 },
//           { name: "Women's haircut", price: 5000, duration: 40 },
//         ],
//       },
//       {
//         name: "Hairstyle",
//         price: 15000,
//         duration: 40,
//         image: "./images/hairstyle.jpg",
//         subServices: [
//           { name: "Wedding hairstyle", price: 20000, duration: 60 },
//           { name: "Evening hairstyle", price: 15000, duration: 40 },
//         ],
//       },
//       {
//         name: "Makeup",
//         price: 15000,
//         duration: 40,
//         image: "./images/makeup.jpg",
//         subServices: [
//           { name: "Eye makeup", price: 5000, duration: 15 },
//           { name: "Bridal makeup", price: 25000, duration: 60 },
//         ],
//       },
//     ];

//     // 3️⃣ Insert services
//     const inserted = await Service.insertMany(services);
//     console.log("🌱 Services seeded successfully!");
//     console.log(JSON.stringify(inserted, null, 2)); // Ամբողջ array–ը console–ում

//   } catch (err) {
//     console.error("❌ Error seeding services:", err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seed();


// const mongoose = require("mongoose");
// const Service = require("../models/Service");


// mongoose
//   .connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon", {
//     dbName: "hairsalon",
//   })
//   .then(() => console.log("✅ MongoDB connected for seeding"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// async function seed() {
//   try {
//     await Service.deleteMany({});
//     console.log("🗑 All old services removed");

//     const services = [
//       {
//         name: "Cosmetology",
//         price: 10000,
//         duration: 15,
//         image: "/images/cosmetology.jpg",
//         subServices: [
//           { name: "Facial", price: 7000, duration: 15 },
//           { name: "Acne treatment", price: 12000, duration: 20 },
//         ],
//       },
//       {
//         name: "Manicure",
//         price: 5000,
//         duration: 60,
//         image: "/images/manicure.jpg",
//         subServices: [
//           { name: "Classic manicure", price: 5000, duration: 40 },
//           { name: "Gel manicure", price: 8000, duration: 60 },
//         ],
//       },
//       {
//         name: "mens_haircut",
//         price: 5000,
//         duration: 60,
//         image: "/images/mens_haircut.jpg",
//         subServices: [
//           { name: "mens_haircut", price: 5000, duration: 40,image: "/images/manicure.jpg" },
//           { name: "children's hair cut", price: 8000, duration: 60,image:"/images/child_haircut.jpg" },
//         ],
//       },
//       {
//         name: "Haircut",
//         price: 5000,
//         duration: 40,
//         image: "/images/haircut.jpg",
//         subServices: [
//           { name: "Men's haircut", price: 3000, duration: 20},
//           { name: "Women's haircut", price: 5000, duration: 40 },
//         ],
//       },
//     ];

//     await Service.insertMany(services);
//     console.log("🌱 Services seeded successfully!");
//   } catch (err) {
//     console.error("❌ Error seeding services:", err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seed();











// seedServices.js
const mongoose = require("mongoose");
const Service = require("./models/Service"); // ճիշտ ուղի

const MONGO_URI ="mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon"; 

async function seed() {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(MONGO_URI, { dbName: "hairsalon" });
    console.log("✅ MongoDB connected for seeding");

    // 2. Clear old services
    await Service.deleteMany({});
    console.log("🗑 All old services removed");

    // 3. Services array
    const services = [
      {
        name: "Cosmetology",
        price: 10000,
        duration: 15,
        image: "/images/cosmetology.jpg",
        subServices: [
          { name: "Facial cleansing", price: 7000, duration: 15, image: "/images/Facial_Cleansing.jpg" },
          { name: "Diode Laser", price: 12000, duration: 20, image: "/images/Diode_Laser.jpg" },
           { name: "Option: Register without choosing", price: 1, duration: 1, image: "/images/welcome_beauty_salon.jpg" },
        ],
      },
      {
        name: "Manicure",
        price: 5000,
        duration: 60,
        image: "/images/manicure.jpg",
        subServices: [
          { name: "Classic manicure", price: 5000, duration: 40, image: "/images/Classic-Manicure.jpg" },
          { name: "Gel manicure", price: 8000, duration: 60, image: "/images/Gel_manicure.jpg" },
           { name: "Option: Register without choosing", price: 1, duration: 1, image: "/images/welcome_beauty_salon.jpg" },
        ],
      },
      {
        name: "Men's Haircut",
        price: 5000,
        duration: 60,
        image: "/images/mens_haircut.jpg",
        subServices: [
          { name: "Barber haircut", price: 5000, duration: 40, image: "/images/Barbershop-Haircuts.jpg" },
          { name: "Children's haircut", price: 8000, duration: 60, image: "/images/Kids_hair_cut.jpg" },
          { name: "Option: Register without choosing", price: 1, duration: 1, image: "/images/welcome_beauty_salon.jpg" },
        ],
      },
      {
        name: "Women's haircut",
        price: 5000,
        duration: 40,
        image: "/images/haircut.jpg",
        subServices: [
          { name: "Short haircuts", price: 3000, duration: 20, image: "/images/womens-short-haircuts.jpg" },
          { name: "Long haircuts", price: 5000, duration: 40, image: "/images/long_hair_cuts.jpg" },
         { name: "Option: Register without choosing", price: 1, duration: 1, image: "/images/welcome_beauty_salon.jpg" },
         ],
      },
    ];

    // 4. Insert services
    await Service.insertMany(services);
    console.log("🌱 Services seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding services:", err);
  } finally {
    // 5. Close connection properly
    await mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
  }
}

// Run seed
seed();
