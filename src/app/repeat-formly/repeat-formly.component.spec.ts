import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatFormlyComponent } from './repeat-formly.component';

describe('RepeatFormlyComponent', () => {
  let component: RepeatFormlyComponent;
  let fixture: ComponentFixture<RepeatFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatFormlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
