const mongoose = require("mongoose");
const colors = require("colors");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
//         .white
//     );
//   } catch (error) {
//     console.log(`Mongodb Database Error ${error}`.bgRed.white);
//   }
// };

const connectDB = async () => {
  try {
    await mongoose.connect( "mongodb://127.0.0.1:27017/");
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
