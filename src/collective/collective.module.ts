import { Module } from '@nestjs/common';
import { CollectiveService } from './collective.service';
import { CollectiveController } from './collective.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectiveSchema } from './schemas/collective.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Collective',
        schema: CollectiveSchema,
        collection: 'collective',
      },
    ]),
  ],
  providers: [CollectiveService],
  controllers: [CollectiveController],
})
export class CollectiveModule {}
