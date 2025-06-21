import { BaseResponseDTO } from "./base_response.dto";

export class ConfirmOTPChangePasswordResponseDTO extends BaseResponseDTO<null> {
  static init(
    success: boolean,
    statusCode: number,
    message?: string,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    return new ConfirmOTPChangePasswordResponseDTO({success, statusCode, message, error, timestamp});
  }
}