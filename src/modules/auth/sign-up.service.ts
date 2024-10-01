import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import * as bcrypt from 'bcrypt';


@Injectable()
export class SignUpService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }
    signup = async (user: any) => {
        let existUser = await this.userModel.findOne({ email: user.email })
        if (existUser) {
            throw new HttpException('user already exist', HttpStatus.CONFLICT);
        }
        user.password = await bcrypt.hash(user.password, 7);
        this.userModel.insertMany(user)
        return { message: "success", user: user }
    }
}
