import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //this decorator allows this service to any other componenets
})
export class SampleService {
  getServerDetails() {
    return [
      { type: 'server', name: 'Ranjith', content: 'Content' },
      { type: 'blueprint', name: 'blueprint', content: 'b_Content' },
    ];
  }
  constructor() {}
}
