import { BaseResponseDTO } from './base_response.dto';

export class UserInfo {
  user_id: string;
  email: string;
  fullName: string;
  roles: string[];
  avatarUrl?: string | null;

  constructor(
    user_id: string,
    email: string,
    fullName: string,
    roles: string[],
    avatarUrl?: string | null
  ) {
    this.user_id = user_id;
    this.email = email;
    this.fullName = fullName;
    this.roles = roles;
    this.avatarUrl = avatarUrl ?? null;
  }
}

export class LoginUserData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: UserInfo;

  constructor(
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    user: UserInfo
  ) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.user = user;
  }
}

export class LoginUserResponseDTO extends BaseResponseDTO<LoginUserData> {
  constructor(
    success: boolean,
    statusCode: number,
    message: string,
    data: LoginUserData,
    errors: any,
  ) {
    super(success, statusCode, message, data, errors);
  }
}