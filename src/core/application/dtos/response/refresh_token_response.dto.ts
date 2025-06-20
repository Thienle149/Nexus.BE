import { RefreshTokenEntity } from "../../../domain/entities/refresh_token.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class RefreshTokenResponseDTO extends BaseResponseDTO<RefreshTokenEntity> {
  constructor(
    success: boolean,
    statusCode: number,
    message: string,
    data: RefreshTokenEntity,
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    super(success, statusCode, message, data, error, timestamp);
  }
}