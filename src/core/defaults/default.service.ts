import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class DefaultService<T, Y, Z> {
  constructor(private defaultModel: Model<T>) {}

  async create(createClientDto: Y) {
    const createItem = new this.defaultModel(createClientDto);
    return createItem.save();
  }

  findAll() {
    return this.defaultModel.find();
  }

  findOne(id: string) {
    return this.defaultModel.findById(id);
  }

  update(id: string, updateClientDto: Z) {
    return this.defaultModel.findByIdAndUpdate(id, { ...updateClientDto });
  }

  remove(id: string) {
    return this.defaultModel.findByIdAndRemove(id);
  }
}
