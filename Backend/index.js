import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import run from "./connection/dbConnect.js";
dotenv.config({ path: "./.env.local" });


const app = express();

const PORT = process.env.PORT || 0;
//DB connect
run();
//router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
