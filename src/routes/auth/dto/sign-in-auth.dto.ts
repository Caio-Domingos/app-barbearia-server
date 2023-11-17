import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ClientSignInDTO {
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail({}, { message: 'Email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;
}

export class BarberSignInDTO {
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail({}, { message: 'Email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;
}
