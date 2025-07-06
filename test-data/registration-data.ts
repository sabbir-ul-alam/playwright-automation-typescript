export class UserRegisterData {
  constructor(
    public title: string,
    public name: string,
    public email: string,
    public password: string,
    public day: string,
    public month: string,
    public year: string,
    public firstName: string,
    public lastName: string,
    public company: string,
    public address: string,
    public country: string,
    public state: string,
    public city: string,
    public zipcode: string,
    public mobile: string,
    public existing: boolean
  ) {}
}

export const userRegistrationDataList: UserRegisterData[] = [
  new UserRegisterData(
    "Mr.",
    "Sabbir",
    "ssualsabbir@gmail.com",
    "123456789",
    "29",
    "10",
    "1996",
    "Sabbir Ul Alam",
    "Sabbir",
    "tigerit",
    "Matikata",
    "United States",
    "Chicago",
    "Illinois",
    "34430",
    "01558258590",
    false
  ),
  new UserRegisterData(
    "Mr.",
    "Sabbir",
    "sualsabbir@gmail.com",
    "123456789",
    "29",
    "10",
    "1996",
    "Sabbir Ul Alam",
    "Sabbir",
    "tigerit",
    "Matikata",
    "United States",
    "Chicago",
    "Illinois",
    "34430",
    "01558258590",
    true
  ),
];
