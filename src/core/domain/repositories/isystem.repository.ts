import { ApparamEntity } from "../entities/appram.entity";

export interface ISystemRepository {
    findConfigSystemByComany(companyId: string): Promise<ApparamEntity[]>;
}