import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import {
  CreateUserInput,
  EditUserArraysInput,
  UpdateUserInput,
} from './user.inputs';
import {
  RecommendationDocument,
  Recommendation,
} from '../recommendation/schemas/recommendation.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Recommendation.name)
    private readonly recommendationModel: Model<RecommendationDocument>,
  ) {}

  addUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  async getUser(spotifyId): Promise<any> {
    const User = await this.userModel.findOne({ spotifyId: spotifyId }).lean();
    if (User) {
      const recommendations = await this.recommendationModel
        .find({
          userId: User._id,
        })
        .populate('recommendedBy')
        .lean();
      const returnData = {
        noUser: false,
        user: {
          ...User,
          recommendations: recommendations.filter(
            (r) => r.recommendedBy !== null,
          ),
        },
      };
      return returnData;
    } else {
      return { noUser: true, user: null };
    }
  }

  getProfile(_id): Promise<User> {
    return this.userModel.findById(_id).exec();
  }

  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getSimilar(topFifty: string[]): Promise<User[]> {
    return this.userModel
      .find({ topFifty: { $elemMatch: { $in: topFifty } } })
      .exec();
  }

  editUser(payload: UpdateUserInput): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  deleteUser(userID): Promise<any> {
    return this.userModel.findByIdAndDelete(userID).exec();
  }

  likeUser(payload: EditUserArraysInput): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(
        payload._id,
        {
          $addToSet: { sentLike: payload.otherUser },
          $pull: { dismissed: payload.otherUser },
        },
        { new: true },
      )
      .exec();
  }

  unlikeUser(payload: EditUserArraysInput): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(
        payload._id,
        {
          $pull: { sentLike: payload.otherUser },
        },
        { new: true },
      )
      .exec();
  }

  hideUser(payload: EditUserArraysInput): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(
        payload._id,
        {
          $addToSet: { dismissed: payload.otherUser },
          $pull: { sentLike: payload.otherUser },
        },
        { new: true },
      )
      .exec();
  }
}
