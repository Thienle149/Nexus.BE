import { AccountRegisterType } from "../../../shared/enum/account_register_type.enum";
import { RegisterUserRequestDTO } from "../../application/dtos/request/register_user_request.dto";
import { User } from "../../infrastructure/database/postgres/models/user.models";

export interface IUserRepository {
    //common
    existOTP(otp: string, requestId: String): Promise<Boolean>;

    //register
    insert(request: RegisterUserRequestDTO): Promise<Boolean>;
    findUserByAccount(username: string): Promise<Boolean>;
    existEmail(email: string): Promise<boolean>;
    existPhone(phoneNumber: string): Promise<boolean>;
    existUserName(username: string): Promise<boolean>;

    //login
    findUserBy(username: String, password: String): Promise<User | null>;

    //change password
    isOldPassword(password: String): Promise<Boolean>;
    updatePassword(password: String): Promise<Boolean>;
}