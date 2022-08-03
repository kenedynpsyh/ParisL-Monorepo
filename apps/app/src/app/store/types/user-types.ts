export interface LoginStateInterface {
  token: string;
  password: string;
  rememmber: boolean;
}

export interface RegisterStateInterface {
  fullname: string;
  email: string;
  password: string;
  confirmation: string;
}

export interface ResetStateInterface {
  email: string;
}

export interface UserStateInterface {
  id?: number;
  public_id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmation?: string;
  author?: AuthorStateInterface;
  logs?: LogStateInterface;
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

export interface LogStateInterface {
  id: number;
  public_id: string;
  loginAt: Date;
  logoutAt: Date;
}
