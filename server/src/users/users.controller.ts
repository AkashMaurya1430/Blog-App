import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from "./users.service"

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post("sign-up")
    signUp(@Body() createUserDto: CreateUserDto) {
        return this.usersService.signUp(createUserDto)
    }

    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.usersService.login(loginDto)
    }
}
