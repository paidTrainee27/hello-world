import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

interface ILocationDto {
  currentLocation: string;
}

@Controller()
export class LocationController {
  constructor(private readonly appService: LocationService) {}

  @Get()
  getLocations(): ILocationDto[] {
    return this.appService.getLocations();
  }
}
