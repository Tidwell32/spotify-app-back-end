import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { User, UserReturnType } from './schemas/user.schema';
import { UserService } from './user.service';
import {
  CreateUserInput,
  UpdateUserInput,
  EditUserArraysInput,
} from './user.inputs';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  //Mutations
  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.addUser(payload);
  }

  @Mutation(() => User)
  async editUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.editUser(payload);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.deleteUser(_id);
  }

  @Mutation(() => User)
  async likeUser(@Args('payload') payload: EditUserArraysInput) {
    return this.userService.likeUser(payload);
  }

  @Mutation(() => User)
  async unlikeUser(@Args('payload') payload: EditUserArraysInput) {
    return this.userService.unlikeUser(payload);
  }

  @Mutation(() => User)
  async hideUser(@Args('payload') payload: EditUserArraysInput) {
    return this.userService.hideUser(payload);
  }

  //Queries
  @Query(() => UserReturnType)
  async user(@Args('spotifyId', { type: () => String }) spotifyId: string) {
    return this.userService.getUser(spotifyId);
  }

  @Query(() => User)
  async profile(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.getProfile(_id);
  }

  @Query(() => [User])
  async similar(
    @Args('topFifty', { type: () => [String] }) topFifty: string[],
  ) {
    return this.userService.getSimilar(topFifty);
  }
}
