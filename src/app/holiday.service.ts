import { Service, resource } from '@angular/core';
import { Holiday } from './holiday';

const holidays: Holiday[] = [
  { id: 1, title: 'Vienna', teaser: 'Museums, coffee houses, and a walk along the Danube.', durationInDays: 3 },
  { id: 2, title: 'Verona', teaser: 'Explore the old town and the Roman arena.', durationInDays: 4 },
  { id: 3, title: 'Lucerne', teaser: 'A few days between the lake and the mountains.', durationInDays: 5 },
];

@Service()
export class HolidayService {
  createHolidaysResource() {
    return resource({
      loader: async () => {
        // Local data keeps this example runnable without a backend.
        await new Promise((resolve) => setTimeout(resolve, 1200));
        return holidays;
      },
    });
  }
}
