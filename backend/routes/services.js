// const express = require("express");
// const router = express.Router();
// const Service = require("../models/Services");

// // 📌 Բոլոր ծառայությունները բերել
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Մեկ ծառայություն բերել
// router.get("/:id", async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);
//     if (!service) return res.status(404).json({ message: "Ծառայությունը չի գտնվել" });
//     res.json(service);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել
// router.post("/", async (req, res) => {
//   const service = new Service({
//     name: req.body.name,
//     image: req.body.image,
//     subservices: req.body.subservices || [],
//   });

//   try {
//     const newService = await service.save();
//     res.status(201).json(newService);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն փոփոխել
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated) return res.status(404).json({ message: "Ծառայությունը չի գտնվել" });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն ջնջել
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Service.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: "Ծառայությունը չի գտնվել" });
//     res.json({ message: "Ծառայությունը ջնջվեց" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;



// import express from "express";
// import Service from "../models/Service.js";

// const router = express.Router();

// // 📌 Բոլոր ծառայությունները ստանալ
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել
// router.post("/", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     const saved = await service.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն ջնջել
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն թարմացնել
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// export default router;






// const express = require("express");
// const Service = require("../models/Service.js");

// const router = express.Router();

// // 📌 Բոլոր ծառայությունները ստանալ
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել
// router.post("/", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     const saved = await service.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն ջնջել
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն թարմացնել
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const Service = require("../models/Service.js");
// const router = express.Router();

// // 📌 Բոլոր ծառայությունները ստանալ
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել
// router.post("/", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     const saved = await service.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն ջնջել
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն թարմացնել
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;

// // const express = require("express");
// // const mongoose = require("mongoose");
// // const router = express.Router();

// // // 📌 Booking schema
// // const bookingSchema = new mongoose.Schema({
// //   name: String,
// //   phone: String,
// //   specialist: String,
// //   services: [
// //     {
// //       name: String,
// //       price: Number,
// //       duration: Number,
// //     },
// //   ],
// //   createdAt: { type: Date, default: Date.now },
// // });

// // // const Booking = mongoose.model("bookings", bookingSchema);
// // const Booking = mongoose.models.bookings || mongoose.model("bookings", bookingSchema);


// // // 📌 Ստեղծել ամրագրում
// // router.post("/", async (req, res) => {
// //   try {
// //     const booking = new Booking(req.body);
// //     const saved = await booking.save();
// //     res.status(201).json(saved);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// // // 📌 Ստանալ բոլոր ամրագրումները
// // router.get("/", async (req, res) => {
// //   try {
// //     const bookings = await Booking.find();
// //     res.json(bookings);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // module.exports = router;













// const express = require("express");
// const Service = require("../models/Service.js");
// const router = express.Router();

// // 📌 Բոլոր ծառայությունները ստանալ
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Նոր ծառայություն ավելացնել
// router.post("/", async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     const saved = await service.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն ջնջել
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 📌 Ծառայություն թարմացնել
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;





// const express = require("express");
// const Service = require("../models/Service");
// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;






// const express = require("express");
// const Service = require("../models/Service");
// const router = express.Router();

// // Ստանալ բոլոր ծառայությունները
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Ջնջել ծառայություն
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;





// const express = require("express");
// const Service = require(".․/models/Service");
// const router = express.Router();

// // Ստանալ բոլոր ծառայությունները
// router.get("/", async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Ավելացնել նոր ծառայություն
// router.post("/", async (req, res) => {
//   const { name, price, duration, image } = req.body;
//   if (!name || !price || !duration) {
//     return res.status(400).json({ message: "Լրացրեք բոլոր դաշտերը" });
//   }

//   try {
//     const newService = new Service({ name, price, duration, image });
//     await newService.save();
//     res.status(201).json(newService);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Ջնջել ծառայություն
// router.delete("/:id", async (req, res) => {
//   try {
//     await Service.findByIdAndDelete(req.params.id);
//     res.json({ message: "Service deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;










const express = require("express");
const Service = require("../models/Service"); // << ճիշտ ուղի
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, price, duration, image } = req.body;
  if (!name || !price || !duration) return res.status(400).json({ message: "Լրացրեք բոլոր դաշտերը" });

  try {
    const newService = new Service({ name, price, duration, image });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


