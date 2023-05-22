import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtHowhabitComponent } from './art-howhabit.component';

describe('ArtHowhabitComponent', () => {
  let component: ArtHowhabitComponent;
  let fixture: ComponentFixture<ArtHowhabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtHowhabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtHowhabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
