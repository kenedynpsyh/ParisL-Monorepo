import { UserInstance } from '@serve/database/models/auth/user-models';
import { fileUploadOptions, status } from '@serve/utils/system-utils';
import { Response } from 'express';
import {
  Authorized,
  Body,
  ContentType,
  Controller,
  CurrentUser,
  Get,
  HttpCode,
  Param,
  Post,
  QueryParams,
  Res,
  UploadedFile,
} from 'routing-controllers';
import { Service } from 'typedi';
import {
  authorfields,
  locationfields,
  loginfields,
  passwordfields,
  registerfields,
  resetfields,
  UserQuery,
} from '../fields/user-fields';
import { UserRepository } from '../repository/user-repository';
import { UserService } from '../services/user-service';

@Controller('user/')
@Service()
export class UserController {
  constructor(
    private readonly repository: UserRepository,
    private readonly service: UserService
  ) {}

  @Get()
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async allController(
    @QueryParams() params: UserQuery,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.repository.findAllRepository(params);
    return res.status(status.OK).json(r);
  }

  @Get('list/admin')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async adminController(
    @QueryParams() query: UserQuery,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.repository.findAllAdminRepository(query);
    return res.status(status.OK).json(r);
  }

  @Get('detail/:public_id')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async findOneController(
    @Param('public_id') public_id: string,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.repository.findOneDetailRepository({ public_id });
    return res.status(status.OK).json(r);
  }

  @Get('me')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async meController(
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.repository.findOneDetailRepository({
      public_id: user.public_id,
    });
    return res.status(status.OK).json(r);
  }

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

  @Get('revoke/token')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async logoutController(
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.logoutService(user.public_id);
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

  @Post('reset')
  @HttpCode(status.OK)
  @ContentType('application/json')
  private async resetController(
    @Body() body: resetfields,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.resetService(body);
    return res.status(r.status).json(r);
  }

  @Post('password')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async passwordController(
    @Body() body: passwordfields,
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.passwordService(body, user.public_id);
    return res.status(r.status).json(r);
  }

  @Post('roles')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async rolesController(
    @Body() body: authorfields,
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.authorService(body, user.public_id);
    return res.status(r.status).json(r);
  }

  @Post('upload/:path')
  @HttpCode(status.OK)
  @Authorized()
  private async uploadController(
    @UploadedFile('file', {
      options: fileUploadOptions('../../upload/author'),
    })
    file: Express.Multer.File,
    @Param('path') path: string,
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.fileService(file, path, user.public_id);
    return res.status(r.status).json(r);
  }

  @Post('location')
  @HttpCode(status.OK)
  @ContentType('application/json')
  @Authorized()
  private async locationController(
    @Body() body: locationfields,
    @CurrentUser() user: UserInstance,
    @Res() res: Response
  ): Promise<Response> {
    const r = await this.service.locationService(body, user.public_id);
    return res.status(r.status).json(r);
  }
}
