import server from "./server";
import mongoose from "mongoose";
import env from "./utils/validateEnv";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(env.mongodbUri)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
