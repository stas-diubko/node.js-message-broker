import express from "express";
import routes from "./appRoutes";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", routes);

export default app;
