import express from "express";
import v1Router from "./v1/routes/routes.js";

import { swaggerDocs as V1SwaggerDocs } from "./v1/swagger.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("<h2>Hello World</h2>");
// });

app.use("/api/v1/workouts", v1Router);

app.listen(PORT, () => {
  console.log("Listening");
  V1SwaggerDocs(app, PORT);
});
