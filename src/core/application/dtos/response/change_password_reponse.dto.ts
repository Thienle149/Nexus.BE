import { ChangePasswordEnity } from "../../../domain/entities/change_password.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class ChangePasswordResponseDTO extends BaseResponseDTO<ChangePasswordEnity> {
  static init(
    success: boolean,
    statusCode: number,
    message?: string,
    data?: ChangePasswordEnity,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    return new ChangePasswordResponseDTO({
      success,
      statusCode,
      message,
      data,
      error,
      timestamp,
    });
  }
}
