import express from "express";
import { insertDataIntoDatabase } from "../utils/insertData.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let games = await insertDataIntoDatabase();

    res.send(games);
  } catch (error) {
    throw error;
  }
});

export default router;
