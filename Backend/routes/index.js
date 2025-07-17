import express  from "express";
const router = express.Router();
import {loginRoute , registerRoute} from "./auth/index.js";


router.use("/api/v1",loginRoute);
router.use("/api/v1",registerRoute);
router.get('/api/v1', (req, res) => {
    res.send("Volla , API working perfectly fine.");
})

export default router;

