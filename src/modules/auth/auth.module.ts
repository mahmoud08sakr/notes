import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignInService } from './sign-in.service';
import { SignInController } from './sign-in.controller';
import { SignUpController } from './sign-up.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/core/schema/user.schema';

@Module({

  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [SignUpService, SignInService],
  controllers: [SignInController, SignUpController]
})
export class AuthModule {}
