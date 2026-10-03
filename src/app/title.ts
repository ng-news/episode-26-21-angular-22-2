import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  template: '<h1>Holidays</h1>',
})
export class Title {
  constructor() {
    // Navigate from the home page so the constructor runs again.
    if (inject(ActivatedRoute).snapshot.queryParamMap.get('broken') === 'true') {
      throw new Error('The title could not be created');
    }
  }
}
