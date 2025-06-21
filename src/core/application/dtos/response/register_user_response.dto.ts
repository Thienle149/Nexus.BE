import { HttpStatus } from "../../../../shared/enum/http_status.enum";
import { SystemMessage } from "../../../../shared/enum/system_message.enum";
import { ErrorObject } from "../../../../shared/errors/ErrorObject";
import { RegisterUserEntity } from "../../../domain/entities/register_user.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class RegisterUserResponseDTO extends BaseResponseDTO<RegisterUserEntity> {
  constructor(params: any) {
    super(params);
  }

  static init(
    success: boolean,
    statusCode: HttpStatus,
    error?: any,
    data?: RegisterUserEntity,
    message?: string
  ): RegisterUserResponseDTO {
    return new RegisterUserResponseDTO({
      success: success,
      statusCode: statusCode,
      error: error,
      data: data,
      message: message,
    });
  }

  static successData(data: RegisterUserEntity) {
    return RegisterUserResponseDTO.init(true, HttpStatus.OK, null, data);
  }

  static failureData(statusCode: HttpStatus, description: String) {
    return RegisterUserResponseDTO.init(
      false,
      statusCode,
      new ErrorObject(SystemMessage.SYSTEM_ERROR_TITLE, description)
    );
  }
}
