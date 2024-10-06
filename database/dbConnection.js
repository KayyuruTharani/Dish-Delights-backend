import mongoose from "mongoose";

export const dbConnection = () => {
  console.log("Connecting to MongoDB...");
  mongoose
    .connect(process.env.MONGO_URL, { 
      dbName: "RESERVATIONS" 
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
