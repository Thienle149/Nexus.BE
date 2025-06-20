import { RegisterUserEntity } from "../../../domain/entities/register_user.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class ConfirmOTPRegisterResponseDTO extends BaseResponseDTO<RegisterUserEntity> {
  constructor(
    success: boolean,
    statusCode: number,
    message?: string,
    data?: RegisterUserEntity,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    super(success, statusCode, message, data, error, timestamp);
  }
}