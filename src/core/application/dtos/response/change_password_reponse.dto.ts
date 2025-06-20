import { ChangePasswordEnity } from "../../../domain/entities/change_password.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class ChangePasswordResponseDTO extends BaseResponseDTO<ChangePasswordEnity> {
  constructor(
    success: boolean,
    statusCode: number,
    message?: string,
    data?: ChangePasswordEnity,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    super(success, statusCode, message, data, error, timestamp);
  }
}