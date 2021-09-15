import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, TopFiftyDTO } from './dto/user.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Submit a user
  @Post('new')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User has been submitted successfully!',
      user: newUser,
    });
  }

  // Fetch all users
  @Get('users')
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('similar/:topFifty')
  async getSimilar(@Res() res, @Param('topFifty') topFifty) {
    const split = topFifty.split('&');
    const users = await this.userService.getSimilar(split);
    return res.status(HttpStatus.OK).json(users);
  }

  @Put('edit')
  async editUser(
    @Res() res,
    @Query('userID', new ValidateObjectId()) userID,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    const editedUser = await this.userService.editUser(userID, createUserDTO);
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }

  // Fetch a particular user using ID
  @Get(':spotifyId')
  async getUser(@Res() res, @Param('spotifyId') spotifyId) {
    const user = await this.userService.getUser(spotifyId);
    if (!user) {
      throw new NotFoundException('none');
    }
    return res.status(HttpStatus.OK).json(user);
  }

  @Post('delete/:id')
  async deleteUser(@Res() res, @Param('id') id) {
    const user = await this.userService.deleteUser(id);
    if (!user) {
      throw new NotFoundException('none');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted',
    });
  }

  @Put('like')
  async likeUser(@Res() res, @Body() body) {
    const editedUser = await this.userService.likeUser(
      body.userID,
      body.likeID,
    );
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }

  @Put('unlike')
  async unlikeUser(@Res() res, @Body() body) {
    const editedUser = await this.userService.hideUser(
      body.userID,
      body.likeID,
    );
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }

  @Put('hide')
  async hideUser(@Res() res, @Body() body) {
    const editedUser = await this.userService.hideUser(
      body.userID,
      body.hideID,
    );
    if (!editedUser) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      user: editedUser,
    });
  }
}
