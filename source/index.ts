import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3333;
const app = express();

app.listen(port, () => console.log(`Server running at: ${port} port...`));
