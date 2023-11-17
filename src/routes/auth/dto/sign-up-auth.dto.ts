import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ClientSignUpDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'Nome deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail({}, { message: 'Email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;
}

export class BarberSignUpDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'Nome deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail({}, { message: 'Email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;
}
