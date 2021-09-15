import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/user.dto';
import { Recommendation } from 'src/recommendation/recommendation.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Recommendation')
    private readonly recommendationModel: Model<Recommendation>,
  ) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await new this.userModel(createUserDTO);
    return newUser.save();
  }

  async getUser(spotifyId): Promise<any> {
    const User = await this.userModel.findOne({ spotifyId: spotifyId }).lean();
    if (User) {
      const recommendations = await this.recommendationModel
        .find({
          userId: User._id,
        })
        .populate('recommendedBy', ['name', 'spotifyId', 'picture'])
        .lean();
      return { ...User, recommendations: recommendations };
    } else {
      return null;
    }
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

  async likeUser(userID, likeID): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      {
        $addToSet: { sentLike: likeID },
        $pull: { dismissed: likeID },
      },
      { new: true },
    );
    return editedUser;
  }

  async unlikeUser(userID, likeID): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      {
        $pull: { sentLike: likeID },
      },
      { new: true },
    );
    return editedUser;
  }

  async hideUser(userID, hideID): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      userID,
      {
        $addToSet: { dismissed: hideID },
        $pull: { sentLike: hideID },
      },
      { new: true },
    );
    return editedUser;
  }
}
