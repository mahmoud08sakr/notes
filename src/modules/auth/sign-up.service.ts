import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';

@Injectable()
export class SignUpService {

    constructor(@InjectModel(User.name)private userModel:Model<User>) {}

signup=(user:any) =>{
    this.userModel.insertMany(user)
    return {message:"success" , user:user}  
    
}

}
