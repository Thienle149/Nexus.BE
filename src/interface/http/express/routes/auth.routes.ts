import { Router } from "express";
import { AuthController } from "../controllers/auth.controllers";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthRoutes {
  public router: Router;

  constructor(@inject(AuthController) private authController: AuthController) {
    this.router = Router();
    this.initialRoutes();
  }

  private initialRoutes() {
    this.router.post("/register", this.authController.register);
  }
}
