// import path from "path";
// import express from "express";
// const app = express();

// // uploads պապկայի մեջ պահված նկարները մատչելի դառնան
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));





//  express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");


// app.use(cors());
// app.use(express.json());

// // ✅ Միացում MongoDB Atlas-ին
// mongoose
//   .connect(
//     "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/salon",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Սխեմաներ և մոդելներ
// const bookingSchema = new mongoose.Schema({
//   name: String,
//   contact: String,
//   date: String,
//   time: String,
//   services: [String],
//   totalPrice: Number,
// });

// const serviceSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
// });

// const Booking = mongoose.model("Booking", bookingSchema);
// const Service = mongoose.model("Service", serviceSchema);

// // ✅ Booking API
// app.post("/bookings", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.json({message:"Booking saved successfuly"});
//   } catch (error) {
//     res.status(500).json({ error: "Error saving booking" });
//   }
// });

// app.get("/bookings", async (req, res) => {
//   try {
//     const { date } = req.query;
//     const filter = date ? { date } : {};
//     const bookings = await Booking.find(filter);
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching bookings" });
//   }
// });

// // ✅ Service API
// app.get("/services", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching services" });
//   }
// });

// app.post("/services", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     await service.save();
//     res.json({message:"Service added successfully"});
//   } catch (error) {
//     res.status(500).json({ error: "Error saving service" });
//   }
// });

// // ✅ Սերվերի запуск
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// })




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Service = require("./models/Service");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 📌 MongoDB–ի միացում




// mongoose.connect("mongodb://127.0.0.1:27017/hairsalon", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // 📌 Գլխավոր check
// app.get("/", (req, res) => {
//   res.send("💇‍♀️ Hair Salon API working!");
// });

// // 📌 Վերցնել բոլոր ծառայությունները
// app.get("/services", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել (եթե պետք լինի)
// app.post("/services", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     await service.save();
//     res.json(service);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid data" });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Service = require("./models/Service");
// const path = require("path");

// const app = express();
// app.use(cors({origin:"http://localhost:3000",
//   methods:["GET","POST","PUT","DELETE"],
//   credentials:true
// }));
// app.use(express.json());
// app.use("/uploads",
//   express.static(path.json(__dirname,"uploads"))
// )

// // ✅ Միացիր Atlas-ին
// mongoose.connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/")
//   .then(() => console.log("✅ MongoDB Atlas connected"))
//   .catch(err => console.error("❌ MongoDB error:", err));

// // API
// app.get("/services", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const Service = require("./models/Service");

// const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ MongoDB Atlas
// mongoose.connect("mongodb+srv://admin:n123@salon.rqgzqen.mongodb.net/")
//   .then(() => console.log("✅ MongoDB Atlas connected"))
//   .catch(err => console.error("❌ MongoDB error:", err));

// // Get services
// app.get("/services", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Add service
// app.post("/services", async (req, res) => {
//   try {
//     const newService = new Service(req.body);
//     await newService.save();
//     res.json(newService);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add service" });
//   }
// });

// // Delete service
// app.delete("/services/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete service" });
//   }
// });

// app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const servicesRouter = require("./routes/services");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/beauty-salon", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use("/services", servicesRouter);

// app.listen(5000, () => {
//   console.log("✅ Server running on port 5000");
// });


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import serviceRoutes from "./routes/services.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🟢 Service Routes
// app.use("/services", serviceRoutes);

// // MongoDB connect
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


// const mongoose = require("mongoose");
// const Service = require("./models/Service");

// // ✅ Միացում Atlas-ին
// mongoose.connect(
//   "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon?retryWrites=true&w=majority"
// )
// .then(() => console.log("✅ MongoDB connected"))
// .catch(err => console.error("❌ MongoDB connection error:", err));

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
//     console.log("🌱 Services seeded successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error seeding:", err);
//     mongoose.connection.close();
//   }
// }

// seed();

// const express = require("express");
// require("./SeedServices.js");
// const mongoose = require("mongoose");
// const cors = require("cors");
// // const servicesRouter = require("./routes/Services");
// const app = express();
// const path = require("path");



// app.use(cors());
// app.use(express.json());

// // 🔹 Ասում ենք Express-ին որ "public" թղթապանակը static files տա
// app.use(express.static(path.join(__dirname, "public")));

// // ✅ MongoDB Atlas-ին connect
// mongoose
//   .connect("mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon", {
//     dbName: "hairsalon",
//   })
//   .then(() => {
//     console.log("✅ MongoDB connected");
//   const servicesRouter = require("./routes/services.js");
//     app.use("/services", servicesRouter);
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// })
//   .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// mongoose
//   .connect("mongodb://127.0.0.1:27017/hairsalon", {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,

//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));




// --- ROUTES ---
// 📌 բոլոր services API-ները սկսվում են /services


// --- SERVER START ---



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const bookingsRouter = require("./routes/bookings");
// app.use("/bookings", bookingsRouter);

// const PORT = 5000;
// const MONGO_URI = "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon";

// // ✅ Connect to MongoDB
// async function startServer() {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       dbName: "hairsalon",
//     });
//     console.log("✅ MongoDB Atlas connected");
//     console.log("👉 DB services:", bookingsRouter)

//     // Load routes ONLY after DB is ready
//     const serviceRoutes = require("./routes/Services");
//     app.use("/services", serviceRoutes);

// console.log("👉 DB services:",serviceRoutes )


//     app.listen(PORT, () =>
//       console.log(`🚀 Server running at http://localhost:${PORT}`)
//     );
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err.message);
//   }
// }

// startServer();



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 📌 Routes
// const bookingsRouter = require("./routes/bookings");
// const serviceRoutes = require("./routes/services");

// app.use("/bookings", bookingsRouter);
// app.use("/services", serviceRoutes);

// const PORT = 5000;
// const MONGO_URI = "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon";

// // ✅ Connect to MongoDB
// async function startServer() {
//   try {
//     await mongoose.connect(MONGO_URI, { dbName: "hairsalon" });
//     console.log("✅ MongoDB Atlas connected");

//     app.listen(PORT, () =>
//       console.log(`🚀 Server running at http://localhost:${PORT}`)
//     );
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err.message);
//   }
// }

// startServer();













const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingsRouter = require("./routes/bookings");
const servicesRouter = require("./routes/services");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.use("/bookings", bookingsRouter);
app.use("/services", servicesRouter);

const PORT = 5000;
const MONGO_URI = "mongodb+srv://admin__:n123@salon.rqgzqen.mongodb.net/hairsalon";

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI, { dbName: "hairsalon" });
    console.log("✅ MongoDB Atlas connected");

    app.listen(PORT, "0.0.0.0",() => console.log(`🚀 Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}

startServer();
