import { RefreshTokenEntity } from "../../../domain/entities/refresh_token.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class RefreshTokenResponseDTO extends BaseResponseDTO<RefreshTokenEntity> {
  static init(
    success: boolean,
    statusCode: number,
    message: string,
    data: RefreshTokenEntity,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    return new RefreshTokenResponseDTO({
      success,
      statusCode,
      message,
      data,
      error,
      timestamp,
    });
  }
}
