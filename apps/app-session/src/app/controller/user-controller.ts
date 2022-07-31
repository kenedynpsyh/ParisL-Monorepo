import { status } from '@serve/utils/system-utils';
import { Response } from 'express';
import {
  Body,
  ContentType,
  Controller,
  HttpCode,
  Post,
  Res,
} from 'routing-controllers';
import { Service } from 'typedi';
import { loginfields, registerfields } from '../fields/user-fields';
import { UserRepository } from '../repository/user-repository';
import { UserService } from '../services/user-service';

@Controller('user/')
@Service()
export class UserController {
  constructor(
    private readonly repository: UserRepository,
    private readonly service: UserService
  ) {}

  @Post('login')
  @HttpCode(status.OK)
  @ContentType('application/json')
  private async loginController(
    @Body() body: loginfields,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.loginService(body);
    return res.status(r.status).json(r);
  }

  @Post('created')
  @HttpCode(status.CREATED)
  @ContentType('application/json')
  private async createdController(
    @Body() body: registerfields,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.createdService(body);
    return res.status(r.status).json(r);
  }
}
