import express from "express";
import bodyParser from "body-parser";
import { POST } from "./routes/uas";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/oktavia", (req, res) => {
  POST(req, res);
});

app.listen(port, () => {
  console.log('Server berjalan di http://localhost:${port}');
});