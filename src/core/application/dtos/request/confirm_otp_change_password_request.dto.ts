import { ChangePasswordEnity } from "../../../domain/entities/change_password.entity";
import { BaseRequestDTO } from "./base_request.dto";

export class ConfirmOTPChangePasswordRequestDTO extends BaseRequestDTO {
  data: ChangePasswordEnity;
  otp: string;

  constructor(params: {
    data: any;
    otp: string;
  }) {
    super();
    this.data = new ChangePasswordEnity(params.data);
    this.otp = params.otp;
  }
}