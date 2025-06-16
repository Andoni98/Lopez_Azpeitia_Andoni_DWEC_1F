export class User {
    constructor(
        public name: string,
        public job: string,
        public id?: number,
        public createdAt?: Date
    ){}
    serialize(): String {
        return JSON.stringify({
            name: this.name,
            job: this.job,
            id: this.id,
            createdAt: new Date(),
    })
    }
}