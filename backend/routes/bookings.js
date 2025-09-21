// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();

// // Booking schema
// const bookingSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   specialist: String,
//   services: [
//     {
//       name: String,
//       price: Number,
//       duration: Number,
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// const Booking = mongoose.model("bookings", bookingSchema);

// // 📌 Ստեղծել ամրագրում
// router.post("/", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     const saved = await booking.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 📌 Ստանալ բոլոր ամրագրումները
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;






// const express = require("express");
// const Booking = require("../models/Booking");
// const router = express.Router();

// // Ստեղծել booking
// router.post("/", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     const saved = await booking.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Ստանալ բոլոր booking-ները
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;










// const express = require("express");
// const Booking = require("../models/booking"); // << ճիշտ ուղի
// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     const saved = await booking.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     await Booking.findByIdAndDelete(req.params.id);
//     res.json({ message: "Booking deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;





















// const express = require("express");
// const Booking = require("../models/Boock"); // ✅ Model-ի ուղին մեծատառով
// const router = express.Router();

// // Ստեղծել ամրագրում
// router.post("/", async (req, res) => {
//   console.log(req.body);
//   try {
//     const booking = new Booking(req.body);
//     const saved = await booking.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     console.log(err.message);
//     res.status(400).json({ message: err.message });
//   }
// });

// // Բոլոր ամրագրումները ստանալ
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ createdAt: -1 }); // վերջինը վերևում
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Ջնջել ամրագրում
// router.delete("/:id", async (req, res) => {
//   try {
//     await Booking.findByIdAndDelete(req.params.id);
//     res.json({ message: "Booking deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;












const express = require("express");
const Booking = require("../models/Boock"); // ✅ ճշգրիտ ուղի
const router = express.Router();

// Ստեղծել ամրագրում
router.post("/", async (req, res) => {
  console.log("📥 POST /bookings =>", req.body);
  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Booking save error:", err.message);
    res.status(400).json({ message: err.message });
  }
});

// Բոլոր ամրագրումները ստանալ
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ջնջել ամրագրում
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
