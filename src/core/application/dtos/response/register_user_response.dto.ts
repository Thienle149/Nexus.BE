import { HttpStatus } from "../../../../shared/enum/http_status.enum";
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
}
