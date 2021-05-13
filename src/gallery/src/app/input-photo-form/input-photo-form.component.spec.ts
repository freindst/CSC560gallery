import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPhotoFormComponent } from './input-photo-form.component';

describe('InputPhotoFormComponent', () => {
  let component: InputPhotoFormComponent;
  let fixture: ComponentFixture<InputPhotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPhotoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
