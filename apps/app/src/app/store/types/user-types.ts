export interface UserLoginStateInterface {
  token: string;
  password: string;
  remember: boolean;
}

export interface UserRegisterStateInterface {
  fullname: string;
  email: string;
  password: string;
  confirmation: string;
}

export interface UserResetStateInterface {
  email: string;
}

export interface UserInterface {
  id?: number;
  public_id?: string;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: AuthorStateInterface;
  logs?: UserLogStateInterface[];
}

export interface AuthorStateInterface {
  id: number;
  public_id: string;
  avatar: string;
  background: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthday: Date;
}

export interface UserLogStateInterface {
  id: number;
  public_id: string;
  loginAt: Date;
  logoutAt: Date;
}

export interface UserStateInterface {
  user: UserInterface[];
  data: UserInterface;
}
