import { Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { UsersController } from './controller/users/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
