import express from "express";
import routes from "./router";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || "8000";
app.use(routes);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
