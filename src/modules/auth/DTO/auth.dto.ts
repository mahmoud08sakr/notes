import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from "class-validator"



export class signUpDTO {

    @MaxLength(20)
    @MinLength(2)
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string
}