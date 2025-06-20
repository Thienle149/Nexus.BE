import { BaseRequestDTO } from "./base_request.dto";

export class RegisterUserRequestDTO extends BaseRequestDTO {
  email: string;
  phoneNumber: string;
  password: string;
  fullName?: string | null;
  termsAccepted: boolean;

  constructor(params: {
    email: string;
    phoneNumber: string;
    password: string;
    fullName?: string | null;
    termsAccepted: boolean;
  }) {
    super();
    this.email = params.email;
    this.phoneNumber = params.phoneNumber;
    this.password = params.password;
    this.fullName = params.fullName ?? null;
    this.termsAccepted = params.termsAccepted;
  }
}
