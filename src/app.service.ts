import { Injectable } from '@nestjs/common';

interface ILocationDto {
  currentLocation: string;
}

@Injectable()
export class AppService {
  getLocations(): ILocationDto[] {
    const locations = [
      { currentLocation: 'location1' },
      { currentLocation: 'location2' },
      { currentLocation: 'location3' },
    ];
    return locations;
  }
}
