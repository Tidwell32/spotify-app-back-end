import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ArtistsModule } from './artists/artists.module';
import { TracksModule } from './tracks/tracks.module';
import { RecommendationModule } from './recommendation/recommendation.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ztidwell:Twinkie12!@spotify-app.ofqk0.mongodb.net/spotify-app?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    UserModule,
    ArtistsModule,
    TracksModule,
    RecommendationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
