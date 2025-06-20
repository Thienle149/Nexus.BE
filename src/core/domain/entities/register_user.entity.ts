import { BaseConfirmOTPEntity } from "./base_confirm_otp.entity";

export class RegisterUserEntity extends BaseConfirmOTPEntity {
    email: string;
    phoneNumber: string;
    fullName: string;
    password: string;
  
    constructor(params: any) {
      super(params);
      this.email = params.email;
      this.phoneNumber = params.phoneNumber;
      this.fullName = params.fullName;
      this.password = params.password;
    }
  }