import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitProgressBarComponent } from './habit-progress-bar.component';

describe('HabitProgressBarComponent', () => {
  let component: HabitProgressBarComponent;
  let fixture: ComponentFixture<HabitProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
