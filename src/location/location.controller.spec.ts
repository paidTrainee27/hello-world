import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('AppController', () => {
  let appController: LocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService],
    }).compile();

    appController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return list of locations', () => {
      expect(appController.getLocations()).toMatchObject([
        { currentLocation: 'location1' },
        { currentLocation: 'location2' },
        { currentLocation: 'location3' },
      ]);
    });
  });
});
