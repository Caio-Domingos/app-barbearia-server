import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { BarberSignUpDTO, ClientSignUpDTO } from './dto/sign-up-auth.dto';
import { ClientSignInDTO, BarberSignInDTO } from './dto/sign-in-auth.dto';
import { EncryptPasswordPipe } from 'src/pipes/encrypt-password.pipe';
import { Public } from 'src/guards/auth.guard';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('client/sign-up')
  // @Public()
  @UsePipes(EncryptPasswordPipe)
  async clientSignUp(@Body() clientSignUpDTO: ClientSignUpDTO) {
    try {
      console.log('init contr');
      return this.authService.clientSignUp(clientSignUpDTO);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  @Post('barber/sign-up')
  // @Public()
  @UsePipes(EncryptPasswordPipe)
  async barberSignUp(@Body() barberSignUpDTO: BarberSignUpDTO) {
    return this.authService.barberSignUp(barberSignUpDTO);
  }
  @Post('client/sign-in')
  // @Public()
  async clientSignIn(@Body() clientSignInDTO: ClientSignInDTO) {
    return this.authService.clientSignIn(clientSignInDTO);
  }
  @Post('barber/sign-in')
  // @Public()
  async barberSignIn(@Body() barberSignInDTO: BarberSignInDTO) {
    return this.authService.barberSignIn(barberSignInDTO);
  }
}
