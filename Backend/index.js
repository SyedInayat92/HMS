import express from 'express';
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const app = express();

app.get('/', (req, res) => {
    res.send("Volla , API working perfectly fine.");
})

const PORT = process.env.PORT || 0;
app.listen(PORT, () => {

    console.log(`Server Running on ${PORT}`);

})

