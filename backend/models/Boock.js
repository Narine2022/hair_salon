// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   specialist: String,
//   services: [
//     {
//       name: String,
//       price: Number,
//       duration: Number,
//       subServices: [
//         {
//           name: String,
//           price: Number,
//           duration: Number,
//           image: String,

//         },
//       ],
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Booking", bookingSchema);







// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   specialist: String,
//   services: [
//     {
//       name: String,
//       price: Number,
//       duration: Number,
//       subServices: [
//         {
//           name: String,
//           price: Number,
//           duration: Number,
//           image: String,
//         },
//       ],
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("booking", bookingSchema);




// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   specialist: { type: String, required: true },
//   services: [
//     {
//       name: { type: String, required: true },
//       price: { type: Number, required: true },
//       duration: { type: Number, required: true },
//       image: { type: String }, // << ավելացրել եմ այստեղ, որ ուղիղ services-ի մեջ էլ նկարը պահվի
//       subServices: [
//         {
//           name: String,
//           price: Number,
//           duration: Number,
//           image: String,
//         },
//       ],
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Booking", bookingSchema);



















// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },

//   // 👇 ObjectId instead of whole object
//   specialistId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Specialist", // պետք ա ունենաս Specialist model
//     required: true,
//   },

//   services: [
//     {
//       name: { type: String, required: true },
//       price: { type: Number, required: true },
//       duration: { type: Number, required: true },
//       image: { type: String },
//       subServices: [
//         {
//           name: String,
//           price: Number,
//           duration: Number,
//           image: String,
//         },
//       ],
//     },
//   ],

//   createdAt: { type: Date, default: Date.now },
// });

// // ⚠️ Ֆայլի անունը լավ կլինի Booking.js, մոդելի անունն էլ Booking
// module.exports = mongoose.model("Booking", bookingSchema);









const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },

  // 🔹 պահում ենք որպես String (id: "1", "2")
  specialistId: { type: String, required: true },

  services: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      duration: { type: Number, required: true },
      image: { type: String },
      subServices: [
        {
          name: String,
          price: Number,
          duration: Number,
          image: String,
        },
      ],
    },
  ],

  date: { type: String, required: true },
  time: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
});

// 📌 ճիշտ անունը => Booking
module.exports = mongoose.model("Boock", bookingSchema);
