import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationDto {
  currentLocation: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLocations(): ILocationDto[] {
    return this.appService.getLocations();
  }
}
