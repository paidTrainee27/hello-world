import { AppController } from './app.controller';
import { AppService } from './app.service';

const service = new AppService();
const app = new AppController(service);

//npx ts-node filename.ts
const hello = app.getLocations();
console.log(hello);
