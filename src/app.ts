import "reflect-metadata";
import "./core/infrastructure/third-party/tsyringe/di"
import express from "express";
import checkingRoutes from "./interface/http/express/routes/checking.routes";
import { AuthRoutes } from "./interface/http/express/routes/auth.routes";
import { container } from "tsyringe";

const app = express();

//Middleware cơ bản
app.use(express.json());

//Intial Routes
const authRoutes = container.resolve(AuthRoutes);

//Routes
app.use("/api/checking", checkingRoutes);
app.use("/api/auth", authRoutes.router);

export default app;
