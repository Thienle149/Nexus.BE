import { BaseRequestDTO } from "./base_request.dto";

export class RefreshTokenRequestDTO extends BaseRequestDTO {
  refreshToken: string;

  constructor(data: any) {
    super();
    this.refreshToken = data.refreshToken;
  }
}