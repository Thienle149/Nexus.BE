import { BaseResponseDTO } from "./base_response.dto";

export class ConfirmOTPChangePasswordResponseDTO extends BaseResponseDTO<null> {
  constructor(
    success: boolean,
    statusCode: number,
    message?: string,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    super(success, statusCode, message, null, error, timestamp);
  }
}