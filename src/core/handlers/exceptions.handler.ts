import { HttpException, HttpStatus } from '@nestjs/common';

// Exception para email já cadastrado
export class EmailAlreadyRegisteredException extends HttpException {
  constructor() {
    super('Email já cadastrado', HttpStatus.BAD_REQUEST);
  }
}

// Exception para usuario/email não encontrado
export class UserNotFoundException extends HttpException {
  constructor() {
    super('Usuário não encontrado', HttpStatus.NOT_FOUND);
  }
}

// Exception para senha incorreta
export class WrongPasswordException extends HttpException {
  constructor() {
    super('Senha incorreta', HttpStatus.BAD_REQUEST);
  }
}

// Exception para token em falta
export class MissingTokenException extends HttpException {
  constructor() {
    super('Sem token no header', HttpStatus.UNAUTHORIZED);
  }
}

// Exception para token inválido
export class InvalidTokenException extends HttpException {
  constructor() {
    super('Token inválido', HttpStatus.UNAUTHORIZED);
  }
}
