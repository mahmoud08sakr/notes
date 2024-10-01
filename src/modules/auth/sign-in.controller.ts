import { Body, Controller, Post } from '@nestjs/common';
import { signInDTO } from './DTO/auth.dto';
import { SignInService } from './sign-in.service';

@Controller('sign-in')
export class SignInController {
    constructor(private _SignInService:SignInService ) {
    }
    @Post()
    signIn(@Body() body: signInDTO) {
        return this._SignInService.signup(body)
    }

}
