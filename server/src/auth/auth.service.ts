import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: DatabaseService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && password == user.password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(userData: { email: string; password: string }) {

    const user = await this.prisma.user.findUnique({ where: { email: userData.email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = userData.password == user.password;
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, user_id: user.id };
    // console.log('payload: ', payload);
    return {
      access_token: this.jwtService.sign(payload),
      username: user.username
    };
  }

  async register(userData: { username: string; email: string; password: string }) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { username: userData.username },
          { email: userData.email },
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }

    const hashedPassword = userData.password;
    const user = await this.prisma.user.create({
      data: {
        username: userData.username.trim(),
        email: userData.email.trim(),
        password: hashedPassword,
      },
    });
    return user;
  }
}
