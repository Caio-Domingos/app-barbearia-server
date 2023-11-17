import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { Barber } from '../barbers/entities/barber.schema';
import { Client } from '../clients/entities/client.schema';
import {
  EmailAlreadyRegisteredException,
  UserNotFoundException,
  WrongPasswordException,
} from 'src/core/handlers/exceptions.handler';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>,
    @InjectModel(Barber.name) private barberModel: Model<Barber>,
    private jwtService: JwtService,
  ) {}

  async clientSignUp(clientSignUpDTO) {
    try {
      // Verificar se tem no banco algum usuario com esse email
      const clientChecker = await this.clientModel.findOne({
        email: clientSignUpDTO.email,
      });
      console.log(clientChecker);
      // Se tiver, retornar erro
      if (clientChecker) {
        throw new EmailAlreadyRegisteredException();
      }

      const client = await this.clientModel.create(clientSignUpDTO);
      return client;
    } catch (error) {
      throw error;
    }
  }

  async barberSignUp(barberSignUpDTO) {
    try {
      // Verificar se tem no banco algum usuario com esse email
      const barberChecker = await this.barberModel.findOne({
        email: barberSignUpDTO.email,
      });
      // Se tiver, retornar erro
      if (barberChecker) {
        throw new EmailAlreadyRegisteredException();
      }

      const barber = await this.barberModel.create(barberSignUpDTO);
      return barber;
    } catch (error) {
      throw error;
    }
  }

  async clientSignIn(clientSignInDTO) {
    try {
      // Verificar se tem um usuario com o email enviado
      const client = await this.clientModel.findOne({
        email: clientSignInDTO.email,
      });

      // Se não tiver, retornar erro
      if (!client) {
        throw new UserNotFoundException();
      }

      // Se tiver, verificar se a senha está correta
      const passwordMatch = await bcrypt.compare(
        clientSignInDTO.password,
        client.password,
      );

      // Se não estiver, retornar erro
      if (!passwordMatch) {
        throw new WrongPasswordException();
      }

      // Se estiver, criar o JWT e retornar o usuario com o token
      const payload = {
        sub: client._id,
        name: client.name,
        email: client.email,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
        client,
      };
    } catch (error) {
      throw error;
    }
  }

  async barberSignIn(barberSignInDTO) {
    try {
      // Verificar se tem um usuario com o email enviado
      const barber = await this.barberModel.findOne({
        email: barberSignInDTO.email,
      });

      // Se não tiver, retornar erro
      if (!barber) {
        throw new UserNotFoundException();
      }

      // Se tiver, verificar se a senha está correta
      const passwordMatch = await bcrypt.compare(
        barberSignInDTO.password,
        barber.password,
      );

      // Se não estiver, retornar erro
      if (!passwordMatch) {
        throw new WrongPasswordException();
      }

      // Se estiver, criar o JWT e retornar o usuario com o token
      const payload = {
        sub: barber._id,
        name: barber.name,
        email: barber.email,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
        barber,
      };
    } catch (error) {
      throw error;
    }
  }
}
