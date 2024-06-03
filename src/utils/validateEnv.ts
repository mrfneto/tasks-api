import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const requiredEnvVariables = ["MONGODB_URI", "JWT_SECRET"];

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw new Error(`Missing required environment variable: ${variable}`);
  }
}

export default {
  mongodbUri: process.env.MONGODB_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
};
