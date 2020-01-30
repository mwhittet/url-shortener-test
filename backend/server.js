import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-type,Accept,x-access-token,X-Key"
  });
  req.method === "OPTIONS" ? res.status(200).end() : next();
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);

routes(app);
