import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home';
import { HolidayService } from './holiday.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  {
    path: 'holidays',
    loadComponent: () => import('./holidays-page').then((m) => m.HolidaysPage),
    resources: () => {
      const holidayService = inject(HolidayService);
      return { holidays: holidayService.createHolidaysResource() };
    },
  },
  { path: '**', redirectTo: '' },
];
