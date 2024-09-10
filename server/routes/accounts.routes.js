import express from "express";
import { getAccounts } from "../controllers/accounts.controller.js";

const router = express.Router();

router.get("/getaccounts", getAccounts);
// router.get(`/account/${accountId}`, getAccountById);

export default router;
