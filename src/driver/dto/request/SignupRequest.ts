
export class SignupRequest {
    constructor(
      public accountId: string,
      public name: string,
      public email: string,
      public cpf: string
    ) {}
}