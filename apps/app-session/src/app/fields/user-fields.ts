import { IsString } from 'class-validator';

export class loginfields {
  @IsString()
  token: string;

  @IsString()
  password: string;
}

export class registerfields {
  @IsString()
  fullname: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  confirmation: string;
}

export class resetfields {
  @IsString()
  email: string;
}

export class passwordfields {
  @IsString()
  old_password: string;

  @IsString()
  password: string;

  @IsString()
  confirmation: string;
}

export class authorfields {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  birthday: string;

  @IsString()
  gender: string;
}
