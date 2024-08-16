import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
    private users = [

    ]

    signUp(createUserDto: CreateUserDto) {
        this.users.push(createUserDto)

        return createUserDto
    }

    login(loginDto: LoginDto) {
        const user = this.users.find(user => user.email === loginDto.email)

        if (!user) {
            return {}
        }
        return user
    }
}
