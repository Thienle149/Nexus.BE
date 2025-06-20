import { injectable, inject } from "tsyringe";
import { RegisterUserRequestDTO } from "../dtos/request/register_user_request.dto";
import { IUserRepository } from "../../domain/repositories/iuser.repository";
import { RegisterUserResponseDTO } from "../dtos/response/register_user_response.dto";
import { ErrorObject } from "../../../shared/errors/ErrorObject";
import { SystemMessage } from "../../../shared/enum/system_message.enum";
import { AccountRegisterType } from "../../../shared/enum/account_register_type.enum";
import { RegisterUserEntity } from "../../domain/entities/register_user.entity";
import { IRegisterUserUseCase } from "./registerUser.interface.use_cases";
import { HttpStatus } from "../../../shared/enum/http_status.enum";

@injectable()
export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  async register(req: RegisterUserRequestDTO) {
    let dto: RegisterUserResponseDTO;
    let accountRegisterType = await this.userRepository.existAccount(
      req.email,
      req.phoneNumber
    );

    switch (accountRegisterType) {
      case AccountRegisterType.ACCOUNT_AVAIBLE:
        try {
          let isInsert = await this.userRepository.insert(req);
          if (isInsert) {
            let userEntity = new RegisterUserEntity(req);
            userEntity.needToConfirmOTP = true;
            userEntity.requestId = "0";

            dto = RegisterUserResponseDTO.init(
              true,
              HttpStatus.OK,
              null,
              userEntity
            );
          } else {
            dto = RegisterUserResponseDTO.init(
              false,
              HttpStatus.InternalServerError,
              new ErrorObject("Lỗi", SystemMessage.SYSTEM_ERROR)
            );
          }
        } catch (error) {
          dto = RegisterUserResponseDTO.init(
            false,
            HttpStatus.InternalServerError,
            (error as Error).message
          );
        }
        break;
      case AccountRegisterType.EMAIL_ALREADY_REGISTERED:
        dto = RegisterUserResponseDTO.init(
          false,
          HttpStatus.Conflict,
          new ErrorObject("Lỗi", SystemMessage.EMAIL_ALREADY_REGISTERED)
        );
        break;
      case AccountRegisterType.PHONE_ALREADY_REGISTERED:
        dto = RegisterUserResponseDTO.init(
          false,
          HttpStatus.Conflict,
          new ErrorObject("Lỗi", SystemMessage.PHONE_ALREADY_REGISTERED)
        );
        break;
    }

    return dto;
  }
}
