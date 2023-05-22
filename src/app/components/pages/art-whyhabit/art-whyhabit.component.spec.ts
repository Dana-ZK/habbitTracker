import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWhyhabitComponent } from './art-whyhabit.component';

describe('ArtWhyhabitComponent', () => {
  let component: ArtWhyhabitComponent;
  let fixture: ComponentFixture<ArtWhyhabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtWhyhabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtWhyhabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
