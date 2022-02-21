import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// database connected
import connectDB from "./db/connect.js";

// routes
import authRuter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

//import middleware
import errorHandlerMidleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello wrold");
});

app.use("/api/v1/auth", authRuter);
app.use("/api/v1/jobs", jobRouter);

// custom middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
