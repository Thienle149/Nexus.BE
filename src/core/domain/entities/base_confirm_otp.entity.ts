import { BaseEntity } from "typeorm";

export class BaseConfirmOTPEntity extends BaseEntity {
  needToConfirmOTP: boolean;
  requestId: string;

  constructor(params: { needToConfirmOTP: boolean; requestId: string }) {
    super();
    this.needToConfirmOTP = params.needToConfirmOTP;
    this.requestId = params.requestId;
  }
}
