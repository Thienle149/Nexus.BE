import { RegisterUserEntity } from "../../../domain/entities/register_user.entity";
import { BaseRequestDTO } from "./base_request.dto";

export class ConfirmOTPRegisterRequest extends BaseRequestDTO {
  otp: string;
  data: RegisterUserEntity;

  constructor(params: { otp: string; data: any }) {
    super();
    this.otp = params.otp;
    this.data = new RegisterUserEntity(params.data);
  }
}
