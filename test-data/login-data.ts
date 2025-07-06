class LoginData{

    name: string;
    email: string;
    
    constructor({name,email}:{name: string,email: string}){
        this.name = name;
        this.email = email;

    }
}

export const signupDataList: LoginData[]=[
    new LoginData(
        {
            name: "Sabbir",
            email: "sabbirulalam@gmail.com"
        }
    )


]