import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{

    constructor(private prisma:PrismaService){}

    login(){
        return {status:'signed in'};
    }

    signup(){
        return {status: `I am signed up`};
    }
}