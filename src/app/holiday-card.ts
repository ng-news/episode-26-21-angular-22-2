import { Component, input } from '@angular/core';
import { Holiday } from './holiday';

@Component({
  selector: 'app-holiday-card',
  template: `
    <article class="card">
      <p class="eyebrow">{{ holiday().durationInDays }} days</p>
      <h2>{{ holiday().title }}</h2>
      <p>{{ holiday().teaser }}</p>
    </article>
  `,
})
export class HolidayCard {
  readonly holiday = input.required<Holiday>();
}
