import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Three features. One small application.</h1>
    <p class="intro">Try the examples from ng-news: router resources, error boundaries, and private template members.</p>
    <div class="actions">
      <a class="button" routerLink="/holidays">Open holidays</a>
      <a class="button secondary" routerLink="/holidays" [queryParams]="{ broken: true }">Broken title</a>
    </div>
    <ol class="steps">
      <li><strong>Router resources.</strong> Navigation waits 1.2 seconds for the local holiday data. The page receives the loaded array through an input.</li>
      <li><strong>Error boundaries.</strong> Choose Broken title to trigger a constructor error. The fallback appears while the cards remain visible.</li>
      <li><strong>Private template members.</strong> Change the private title signal in holidays-page.ts, then revisit Broken title to see the new fallback heading.</li>
    </ol>
    <p class="note">Router resources and error boundaries are in developer preview in Angular 22.2.</p>
  `,
})
export class Home {}
