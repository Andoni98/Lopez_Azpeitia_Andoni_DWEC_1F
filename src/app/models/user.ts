export class User {
name: string;
job: string;
id?: number;
createdAt?: Date;

  constructor(name: string, job: string, id?: number, createdAt?: Date) {
    this.name = name;
    this.job = job;
    this.id = id;
    this.createdAt= createdAt;
  }

  serialize() {
    return {
      name: this.name,
      job: this.job,
      id: this.id,
      createdAt: this.createdAt,
    };
  }
}