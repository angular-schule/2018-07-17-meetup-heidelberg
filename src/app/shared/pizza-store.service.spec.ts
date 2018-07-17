import { TestBed, inject } from '@angular/core/testing';

import { PizzaStoreService } from './pizza-store.service';

describe('PizzaStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaStoreService]
    });
  });

  it('should be created', inject([PizzaStoreService], (service: PizzaStoreService) => {
    expect(service).toBeTruthy();
  }));
});
