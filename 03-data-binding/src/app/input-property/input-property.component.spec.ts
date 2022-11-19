import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyComponent } from './input-property.component';

describe('InputPropertyComponent', () => {
  let component: InputPropertyComponent;
  let fixture: ComponentFixture<InputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
