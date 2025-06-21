import { singleton } from "tsyringe";
import { AccountRegisterType } from "../../../../../shared/enum/account_register_type.enum";
import { RegisterUserRequestDTO } from "../../../../application/dtos/request/register_user_request.dto";
import { IUserRepository } from "../../../../domain/repositories/iuser.repository";
import { User } from "../models/user.models";
import { query, AppDataSource } from "../../../../../config/database";
import { BaseRepository } from "./base.repository";

@singleton()
export class UserRepository extends BaseRepository implements IUserRepository {
  existOTP(otp: string, requestId: String): Promise<Boolean> {
    return Promise.resolve(true);
  }

  findUserByAccount(username: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

  async insert(request: RegisterUserRequestDTO): Promise<Boolean> {
    const result = await this.repositoryOf(User).insert(request.toJson());
    return result != null;
  }

  async existEmail(email: string): Promise<boolean> {
    const user = await this.repositoryOf(User).findOne({
        where: [{ email }],
      });

      return user != null;
  }

  async existPhone(phoneNumber: string): Promise<boolean> {
    const user = await this.repositoryOf(User).findOne({
        where: [{ phoneNumber }],
      });

      return user != null;
  }

  async existUserName(username: string): Promise<boolean> {
    const user = await this.repositoryOf(User).findOne({
        where: [{ username }],
      });

      return user != null;
  }

  findUserBy(username: String, password: String): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  isOldPassword(password: String): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  updatePassword(password: String): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
}
