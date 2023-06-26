import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const PORT = process.env.PORT || 8080;
//config env
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//databse  configuration
connectDB();
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/products", productRoute);
app.use(express.static(path.join(__dirname, "client", "build")));

// Handle all other routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode and on port ${PORT}`.bgCyan
      .bgYellow
  );
});
