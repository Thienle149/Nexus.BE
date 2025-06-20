import { BaseRequestDTO } from "./base_request.dto";

export class AppramRequestDTO extends BaseRequestDTO {
  companyId: string;

  constructor(companyId: string) {
    super();
    this.companyId = companyId;
  }
}