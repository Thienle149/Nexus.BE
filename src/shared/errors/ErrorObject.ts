import { SystemMessage } from "../enum/system_message.enum";

export class ErrorObject {
    constructor (public title: string, public description: SystemMessage | String) {}
}