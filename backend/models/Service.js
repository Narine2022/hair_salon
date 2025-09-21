// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, default: 30 }, // րոպե
//   image: { type: String, default: "" }     // Նկարի հղում
// });

// module.exports = mongoose.model("Service", serviceSchema);



// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, default: 30 }, // րոպե
//   image: { type: String, default: "" } // Նկարի հղում
// });

// module.exports = mongoose.model("Service", serviceSchema);


// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, default: 30 },
//   image: { type: String, default: "" }
// });

// module.exports = mongoose.model("Service", serviceSchema);



// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number },
//   duration: { type: Number },
//   image: { type: String, default: "" },
//   parent: { type: String, default: null } // 👈 parent service id
// });

// module.exports = mongoose.model("Service", serviceSchema);

// const mongoose = require("mongoose");

// const subServiceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, required: true }, // րոպե
// });

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   image: { type: String, required: false }, // frontend/public/images/
//   subservices: [subServiceSchema], // ենթածառայությունների զանգված
// });

// module.exports = mongoose.model("Service", serviceSchema);

// import mongoose from "mongoose";

// const serviceSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     price: { type: Number },
//     duration: { type: Number },
//     category: { type: String, required: true }, // օրինակ՝ Վարսահարդարում
//   },
//   { timestamps: true }
// );

// const Service = mongoose.model("Service", serviceSchema);

// export default Service;


// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, default: 30 }, // րոպե
//   image: { type: String, default: "" },
//   subServices: [
//     {
//       name: { type: String, required: true },
//       price: { type: Number, default: 0 },
//       duration: { type: Number, default: 30 }
//     }
//   ]
// });

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, required: true },
//   image: { type: String },
//   subServices: [
//     new mongoose.Schema({
//       name: { type: String, required: true },
//       price: { type: Number, default: 0 },
//       duration: { type: Number, default: 30 }
//     }, { _id: false }) // _id: false, որ subService–ներին սեփական id չտա
//   ]
// });


// module.exports = mongoose.model("Service", serviceSchema);


// const mongoose = require("mongoose");

// const subServiceSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     price: { type: Number, default: 0 },
//     duration: { type: Number, default: 30 },
//   },
//   { _id: true} // subService-ին id չենք տալիս
// );

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, required: true },
//   image: { type: String },
//   subServices: [subServiceSchema],
// });

// module.exports = mongoose.model("Service", serviceSchema);





// const mongoose = require("mongoose");

// const subServiceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, default: 0 },
//   duration: { type: Number, default: 30 },
//   image: { type: String }, // ենթածառայության նկար
// });

// const serviceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: Number, required: true },
//   image: { type: String }, // service նկար
//   subServices: [subServiceSchema],
// });

// module.exports = mongoose.model("Service", serviceSchema);









const mongoose = require("mongoose");

const subServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  duration: { type: Number, default: 30 },
  image: { type: String }, 
});

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  image: { type: String },
  subServices: [subServiceSchema],
});

module.exports = mongoose.model("Service", serviceSchema);
