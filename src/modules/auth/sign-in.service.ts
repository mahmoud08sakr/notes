import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class SignInService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private _jwtService: JwtService) { }
    signup = async (user: any) => {
        let existUser = await this.userModel.findOne({ email: user.email })
        if (!existUser) {
            throw new HttpException('user not exist', HttpStatus.CONFLICT);
        }
        if (!await bcrypt.compare(user.password, existUser.password)) {
            throw new HttpException('password not correct', HttpStatus.CONFLICT);
        }
        let token = await this._jwtService.sign({ name: existUser.name, id: existUser._id }, { secret: "sakoor" })


        return { message: "success", user: existUser, token }
    }
}
