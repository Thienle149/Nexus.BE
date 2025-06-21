import "reflect-metadata";
import { container } from "tsyringe";
import { UserRepository } from "../../database/postgres/repositories/user.repository";
import { AuthController } from "../../../../interface/http/express/controllers/auth.controllers";
import { RegisterUserUseCase } from "../../../application/use-cases/register_user.use_cases";

//Repository
container.register("IUserRepository", { useClass: UserRepository});

//Usecase
container.register("IRegisterUserUseCase", { useClass: RegisterUserUseCase})

//Controller
container.register(AuthController, {useClass: AuthController});