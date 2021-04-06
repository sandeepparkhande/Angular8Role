import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFormlyComponent } from './load-formly.component';

describe('LoadFormlyComponent', () => {
  let component: LoadFormlyComponent;
  let fixture: ComponentFixture<LoadFormlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFormlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
