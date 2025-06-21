import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import { IRegisterUserUseCase } from "../../../../core/application/use-cases/register_user.interface.use_cases";
import { RegisterUserRequestDTO } from "../../../../core/application/dtos/request/register_user_request.dto";
import { RegisterUserResponseDTO } from "../../../../core/application/dtos/response/register_user_response.dto";
import { HttpStatus } from "../../../../shared/enum/http_status.enum";
import { SystemMessage } from "../../../../shared/enum/system_message.enum";

@injectable()
export class AuthController {
    constructor(@inject("IRegisterUserUseCase") private usecase: IRegisterUserUseCase){}
    
    public register = async (req: Request, res: Response) => {
        var reqDTO = new RegisterUserRequestDTO(req.body);
        var resDTO: RegisterUserResponseDTO;

        if(reqDTO == null) {
            resDTO = RegisterUserResponseDTO.failureData(HttpStatus.BadRequest, SystemMessage.SYSTEM_ERROR);
        } else if(reqDTO.email == null || !reqDTO.email.isValidEmail()) {
            resDTO = RegisterUserResponseDTO.failureData(HttpStatus.BadRequest, SystemMessage.EMAIL_INVALID);
        } else if(reqDTO.phoneNumber == null || !reqDTO.phoneNumber.isValidPhoneNumber()) {
            resDTO = RegisterUserResponseDTO.failureData(HttpStatus.BadRequest, SystemMessage.PHONE_INVALID);
        } else if(reqDTO.password == null || !reqDTO.password.isValidPassword())  {
            resDTO = RegisterUserResponseDTO.failureData(HttpStatus.BadRequest, SystemMessage.PASSWORD_INVALID);
        } else if(reqDTO.fullName == null || reqDTO.fullName.isEmpty()) {
            resDTO = RegisterUserResponseDTO.failureData(HttpStatus.BadRequest, SystemMessage.FULLNAME_INVALID);
        } else {
            resDTO = await this.usecase.register(reqDTO);
        }
    
        res.json(resDTO);
    }
}