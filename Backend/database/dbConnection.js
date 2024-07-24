// import mongoose from 'mongoose';

// export const dbConnection = () => {
//   const uri = process.env.MONGO_URI;

//   // Log the URI for debugging
//   console.log('Connecting to MongoDB with URI:', uri);

//   mongoose.connect(uri, {
//     dbName: 'hospital',
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((err) => {
//     console.error(`Some error occurred while connecting to the database: ${err}`);
//   });
// };

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "hospital",
      
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};