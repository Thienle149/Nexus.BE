import { HttpStatus } from "../../../../shared/enum/http_status.enum";

export class BaseResponseDTO<T> {
    success: boolean;
    statusCode: HttpStatus;
    message?: string;
    data?: T;
    error?: any;
    timestamp: Date;
    
    constructor(params: any) {
      this.success = params.success;
      this.statusCode = params.statusCode;
      this.message = params.message;
      this.data = params.data;
      this.error = params.error;
      this.timestamp = params.timestamp ?? new Date();
    }
  }