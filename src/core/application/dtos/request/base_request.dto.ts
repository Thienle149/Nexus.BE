export class BaseRequestDTO {
    toJson() {
        return JSON.parse(JSON.stringify(this));
    }
};