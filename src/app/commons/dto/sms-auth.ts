export class SmsSenderRequest {
    phoneNumber!: string;
    username!: string;
}

export class LoginWithSmsRequest {
    username!: string;
    password!: string;
    activeCode!: string;
}