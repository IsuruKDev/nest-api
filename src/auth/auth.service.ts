import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{

    login(){
        return {status:'signed in'};
    }

    signup(){
        return {status: `I am signed up`};
    }
}