import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { UserDto } from '../../dto/user.dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('/')
  create(@Body() user: UserDto): UserDto | string {
    if (user.name == '' || user.lastName == '') {
      return 'Error, the name and lastName needs to have a value';
    }
    return this.userService.create(user);
  }

  @Get('/')
  findAll(): UserDto[] {
    return this.userService.findAll();
  }
}
