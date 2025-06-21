import { ObjectLiteral } from "typeorm/common/ObjectLiteral";
import { query, AppDataSource } from "../../../../../config/database";
import { Repository } from "typeorm/repository/Repository";

export class BaseRepository {
  repositoryOf<Entity extends ObjectLiteral>(
    entityClass: { new (): Entity } | Function
  ) {
    return AppDataSource.getRepository(entityClass);
  }
}
