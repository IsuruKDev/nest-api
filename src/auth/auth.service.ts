import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable({})
export class AuthService{

    login(){
        return {status:'signed in'};
    }

    signup(){
        return {status: `I am signed up`};
    }
}