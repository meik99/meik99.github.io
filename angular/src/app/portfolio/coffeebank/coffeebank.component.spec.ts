import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeebankComponent } from './coffeebank.component';

describe('CoffeebankComponent', () => {
  let component: CoffeebankComponent;
  let fixture: ComponentFixture<CoffeebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
