import { IsEmail, IsOptional, IsString, isEmail } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    role: string;
}
