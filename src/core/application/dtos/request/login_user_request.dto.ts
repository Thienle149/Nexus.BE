import { BaseRequestDTO } from './base_request.dto';

export class LoginRequestDTO extends BaseRequestDTO {
  userName: string;
  password: string;

  constructor(params: { userName: string; password: string }) {
    super();
    this.userName = params.userName;
    this.password = params.password;
  }
}