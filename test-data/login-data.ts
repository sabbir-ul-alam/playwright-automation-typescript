export class LoginData{

    email: string;
    password: string;
    valid: boolean
    user_name:string;

    constructor(email, password, valid, user_name){
        this.email = email;
        this.password = password;
        this.valid = valid;
        this.user_name = user_name
    }


    // constructor({name,email}:{name: string,email: string}){
    //     this.name = name;
    //     this.email = email;

    // }
}

export const loginDataList: LoginData[] =[
    new LoginData('sualsabbir@gmail.com', '123456789', true, 'Sabbir'),
    new LoginData('sualsabbir@gmail.com', '1', false, 'Sabbir'),


]

// export const signupDataList: LoginData[]=[
//     new LoginData(
//         {
//             name: "Sabbir",
//             email: "sabbirulalam@gmail.com"
//         }
//     )


// ]