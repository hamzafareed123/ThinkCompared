import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBox } from './compare-box';

describe('CompareBox', () => {
  let component: CompareBox;
  let fixture: ComponentFixture<CompareBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
