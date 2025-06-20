import { BaseConfirmOTPEntity } from "./base_confirm_otp.entity";

export class ChangePasswordEnity extends BaseConfirmOTPEntity {
  currentPassword: string;
  newPassword: string;

  constructor(params: any) {
    super(params);
    this.currentPassword = params.currentPassword;
    this.newPassword = params.newPassword;
  }
}