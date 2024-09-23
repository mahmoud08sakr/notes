import { Body, Controller, Post } from '@nestjs/common';
import { signUpDTO } from './DTO/auth.dto';
import { SignUpService } from './sign-up.service';

@Controller('signup')
export class SignUpController {
    constructor(private _SignUpService: SignUpService) {
    }
    @Post()
    signup(@Body() body: signUpDTO) {
        return this._SignUpService.signup(body)
    }
}
