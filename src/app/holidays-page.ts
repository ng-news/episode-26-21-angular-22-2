import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Holiday } from './holiday';
import { HolidayCard } from './holiday-card';
import { Title } from './title';

@Component({
  selector: 'app-holidays',
  imports: [RouterLink, HolidayCard, Title],
  template: `
    <a routerLink="/">← Back to the examples</a>
    @boundary {
      <app-title />
    } @error {
      <h1>{{ title() }}</h1>
      <p class="notice" role="status">The title failed. This fallback is inside the error boundary.</p>
    }
    <p>The router loaded these holidays before opening the page.</p>
    <div class="cards">
      @for (holiday of holidays(); track holiday.id) {
        <app-holiday-card [holiday]="holiday" />
      }
    </div>
  `,
})
export class HolidaysPage {
  // Angular 22.2 allows this TypeScript private member in the template.
  // A JavaScript #title field cannot be read directly from the template.
  private readonly title = signal('Holidays');
  readonly holidays = input.required<Holiday[]>();
}
