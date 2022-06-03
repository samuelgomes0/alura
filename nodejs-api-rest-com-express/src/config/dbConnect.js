import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://samuelgomes:NaquelePique26!@alura.4mtfl.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
