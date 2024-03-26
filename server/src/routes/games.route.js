import express from "express";
import { insertDataIntoDatabase } from "../utils/insertData.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let games = await insertDataIntoDatabase();
  res.send(games);
});

export default router;
