import express from "express";
import { router } from "./router";
import "./routes/agent.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
