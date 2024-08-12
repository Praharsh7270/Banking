import express from "express";
import { addAccount , seeAccount , updateAccount ,deleteAccount} from "../controllers/account_controller.js";

const router = express.Router();

router.post("/addAccount", addAccount);
router.get("/seeAccount" , seeAccount);
router.put("/updateAccount" , updateAccount);
router.delete("/deleteAccount" , deleteAccount);

export default router;