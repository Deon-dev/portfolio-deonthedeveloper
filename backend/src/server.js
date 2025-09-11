import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());


// connectDB
connectDB();

// Routes
app.use("api/projects", projectRoutes);
app.use("api/blogs", blogRoutes);
app.use("api/contact", contactRoutes);


// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));