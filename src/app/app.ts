import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <header><a routerLink="/" class="brand">ng-news</a><span>Angular 22.2</span></header>
    <main>
      <div class="loading" role="status" aria-live="polite">
        @if (router.currentNavigation()) { Loading holidays… }
      </div>
      <router-outlet />
    </main>
    <footer>Local example data · No backend required</footer>
  `,
})
export class App {
  protected readonly router = inject(Router);
}
