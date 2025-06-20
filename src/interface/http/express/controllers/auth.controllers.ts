import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import { IRegisterUserUseCase } from "../../../../core/application/use-cases/registerUser.interface.use_cases";
import { RegisterUserRequestDTO } from "../../../../core/application/dtos/request/register_user_request.dto";

@injectable()
export class AuthController {
    constructor(@inject("IRegisterUserUseCase") private usecase: IRegisterUserUseCase){}
    public register = async (req: Request, res: Response) => {
        let reqDTO = new RegisterUserRequestDTO(req.body);
        let resDTO = await this.usecase.register(reqDTO);
        res.json(resDTO);
    }
}