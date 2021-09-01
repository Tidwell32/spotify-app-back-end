import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await new this.userModel(createUserDTO);
    return newUser.save();
  }

  async getUser(spotifyId): Promise<User> {
    const User = await this.userModel.findOne({ spotifyId: spotifyId }).exec();
    return User;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getSimilar(topFifty: string[]): Promise<User[]> {
    const users = await this.userModel
      .find({ topFifty: { $elemMatch: { $in: topFifty } } })
      .exec();
    return users;
  }

  async editUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return editedUser;
  }

  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }
}
