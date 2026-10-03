import { TestBed } from '@angular/core/testing';
import { Router, provideRouter, withComponentInputBinding, withRouterResources } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, expect, it } from 'vitest';
import { routes } from './app.routes';

async function setup() {
  TestBed.configureTestingModule({
    providers: [provideRouter(routes, withComponentInputBinding(), withRouterResources())],
  });
  return RouterTestingHarness.create('/');
}

describe('Angular 22.2 episode examples', () => {
  it('keeps the previous page while loading, then binds the resource value to the input', async () => {
    const harness = await setup();
    const router = TestBed.inject(Router);
    const navigation = harness.navigateByUrl('/holidays');
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(router.url).toBe('/');
    expect(harness.routeNativeElement?.textContent).toContain('Three features.');
    await navigation;
    harness.detectChanges();
    expect(router.url).toBe('/holidays');
    expect(harness.routeNativeElement?.querySelectorAll('app-holiday-card').length).toBe(3);
    expect(harness.routeNativeElement?.textContent).toContain('Vienna');
    expect(harness.routeNativeElement?.querySelector('.notice')).toBeNull();
  });

  it('renders the private title in the boundary fallback and preserves the holiday cards', async () => {
    const harness = await setup();
    await harness.navigateByUrl('/holidays?broken=true');
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Holidays');
    expect(harness.routeNativeElement?.querySelector('.notice')?.textContent).toContain('The title failed.');
    expect(harness.routeNativeElement?.querySelectorAll('app-holiday-card').length).toBe(3);
  });
});
