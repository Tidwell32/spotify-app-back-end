import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Collective } from './collective.interface';
import { CreateCollectiveDTO } from './dto/collective.dto';

@Injectable()
export class CollectiveService {
  constructor(
    @InjectModel('Collective')
    private readonly collectiveModel: Model<Collective>,
  ) {}

  async getCollectives(): Promise<Collective[]> {
    const Collective = await this.collectiveModel.find().exec();
    return Collective;
  }

  async editCollective(
    collectiveID,
    createCollectiveDTO: CreateCollectiveDTO,
  ): Promise<Collective> {
    const editedCollective = await this.collectiveModel.findByIdAndUpdate(
      collectiveID,
      createCollectiveDTO,
      { new: true },
    );
    return editedCollective;
  }
}
