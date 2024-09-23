import { Injectable } from '@nestjs/common';

@Injectable()
export class SignUpService {
signup=(user:any) =>{
    return {message:"success"}
    
}

}
