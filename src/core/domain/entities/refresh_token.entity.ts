import { BaseEntity } from "typeorm";

export class RefreshTokenEntity extends BaseEntity {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;

  constructor(
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    tokenType: string
  ) {
    super();
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.tokenType = tokenType;
  }
}
