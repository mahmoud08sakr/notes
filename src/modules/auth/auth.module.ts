import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignInService } from './sign-in.service';
import { SignInController } from './sign-in.controller';
import { SignUpController } from './sign-up.controller';

@Module({

  
  providers: [SignUpService, SignInService],
  controllers: [SignInController, SignUpController]
})
export class AuthModule {}
