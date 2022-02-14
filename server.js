import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//import middleware
import errorHandlerMidleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("Hello wrold");
});

// custom middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
