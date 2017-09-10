import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportproductComponent } from './sportproduct.component';

import {CurrencyformaterPipe} from '../../shared/currencyformater.pipe'

describe('SportproductComponent', () => {
  let component: SportproductComponent;
  let fixture: ComponentFixture<SportproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportproductComponent, CurrencyformaterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
