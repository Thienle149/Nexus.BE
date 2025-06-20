import { singleton } from "tsyringe";
import { AccountRegisterType } from "../../../../../shared/enum/account_register_type.enum";
import { RegisterUserRequestDTO } from "../../../../application/dtos/request/register_user_request.dto";
import { IUserRepository } from "../../../../domain/repositories/iuser.repository";
import { User } from "../models/user.models";

@singleton()
export class UserRepository implements IUserRepository {
    existOTP(otp: string, requestId: String): Promise<Boolean> {
        return Promise.resolve(true);
    }
    insert(request: RegisterUserRequestDTO): Promise<Boolean> {
        return Promise.resolve(true);
    }
    findUserByAccount(username: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    existAccount(email: string, phoneNumber: string): Promise<AccountRegisterType> {
        return Promise.resolve(AccountRegisterType.ACCOUNT_AVAIBLE);
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