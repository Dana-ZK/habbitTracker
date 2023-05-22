import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWhathabitComponent } from './art-whathabit.component';

describe('ArtWhathabitComponent', () => {
  let component: ArtWhathabitComponent;
  let fixture: ComponentFixture<ArtWhathabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtWhathabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtWhathabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
