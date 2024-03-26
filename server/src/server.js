import express from "express";
import gamesRoute from "./routes/games.route.js";

const app = express();
const port = 3000;

app.use("/", gamesRoute);

app.listen(port, console.log(`Server is running on port ${port}`));
