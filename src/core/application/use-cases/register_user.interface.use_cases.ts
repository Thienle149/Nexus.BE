import { RegisterUserRequestDTO } from "../dtos/request/register_user_request.dto";
import { RegisterUserResponseDTO } from "../dtos/response/register_user_response.dto";

export interface IRegisterUserUseCase {
    register(req: RegisterUserRequestDTO): Promise<RegisterUserResponseDTO>;
}