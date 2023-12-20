import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
