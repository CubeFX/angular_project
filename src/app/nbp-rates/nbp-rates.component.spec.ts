import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpRatesComponent } from './nbp-rates.component';

describe('NbpRatesComponent', () => {
  let component: NbpRatesComponent;
  let fixture: ComponentFixture<NbpRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbpRatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbpRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
