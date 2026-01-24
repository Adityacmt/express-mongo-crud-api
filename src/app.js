import express from "express";
import userRoutes from "./routes/user.routes.js";
import { logger } from "./middlewares/logger.middleware.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
