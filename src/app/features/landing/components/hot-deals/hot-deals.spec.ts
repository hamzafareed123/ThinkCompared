import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDeals } from './hot-deals';

describe('HotDeals', () => {
  let component: HotDeals;
  let fixture: ComponentFixture<HotDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
