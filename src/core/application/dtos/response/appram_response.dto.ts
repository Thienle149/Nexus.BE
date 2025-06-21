import { ApparamEntity } from "../../../domain/entities/appram.entity";
import { BaseResponseDTO } from "./base_response.dto";

export class ApparamResponseDTO extends BaseResponseDTO<ApparamEntity[]> {
  static init(
    success: boolean,
    statusCode: number,
    message: string | undefined,
    data: ApparamEntity[],
    error?: Map<string, any>,
    timestamp?: Date
  ) {
    return new ApparamResponseDTO({
      success,
      statusCode,
      message,
      data,
      error,
      timestamp,
    });
  }
}
