import express from "express";
import { createInvestment } from "../controllers/investment.controller.js";

const router = express.Router();

router.post("/", createInvestment);


export default router;