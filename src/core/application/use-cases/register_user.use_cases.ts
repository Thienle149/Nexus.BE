import { injectable, inject } from "tsyringe";
import { RegisterUserRequestDTO } from "../dtos/request/register_user_request.dto";
import { IUserRepository } from "../../domain/repositories/iuser.repository";
import { RegisterUserResponseDTO } from "../dtos/response/register_user_response.dto";
import { ErrorObject } from "../../../shared/errors/ErrorObject";
import { SystemMessage } from "../../../shared/enum/system_message.enum";
import { AccountRegisterType } from "../../../shared/enum/account_register_type.enum";
import { RegisterUserEntity } from "../../domain/entities/register_user.entity";
import { IRegisterUserUseCase } from "./register_user.interface.use_cases";
import { HttpStatus } from "../../../shared/enum/http_status.enum";

@injectable()
export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  async register(req: RegisterUserRequestDTO) {
    //Check email
    const existEmail = await this.userRepository.existEmail(req.email);
    if (existEmail) {
      return RegisterUserResponseDTO.failureData(
        HttpStatus.Conflict,
        SystemMessage.EMAIL_ALREADY_REGISTERED
      );
    }

    //Check phone
    const existPhone = await this.userRepository.existPhone(req.phoneNumber);
    if (existPhone) {
      return RegisterUserResponseDTO.failureData(
        HttpStatus.Conflict,
        SystemMessage.PHONE_ALREADY_REGISTERED
      );
    }

    //Check username
    const username = req.username ?? req.generateUsername();
    const existUsername = await this.userRepository.existUserName(username);
    if (existUsername) {
      return RegisterUserResponseDTO.failureData(
        HttpStatus.Conflict,
        SystemMessage.USERNAME_ALREADY_REGISTERED
      );
    }

    //Update value before insert database
    req.username = username;
    req.password = req.password.encrypt().toString();

    //Insert
    let isInsert = await this.userRepository.insert(req);
    if (isInsert) {
      let userEntity = new RegisterUserEntity(req);
      userEntity.needToConfirmOTP = true;
      userEntity.requestId = "0";
      userEntity.username = req.username;

      return RegisterUserResponseDTO.successData(userEntity);
    } else {
      return RegisterUserResponseDTO.failureData(
        HttpStatus.InternalServerError,
        SystemMessage.SYSTEM_ERROR
      );
    }
  }
}
