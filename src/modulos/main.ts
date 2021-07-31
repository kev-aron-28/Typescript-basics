export class createAccount{
    name:string;
    user:string;
    protected password:string;
    constructor(name: string, user:string, password:string){
        this.name = name;
        this.user = user;
        this.password = password;
    }

    show(){
        console.log(`Name ${this.name}, User: ${this.user}`);
    }
}



