import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContentComponent } from './exemplo-ng-content.component';

describe('ExemploNgContentComponent', () => {
  let component: ExemploNgContentComponent;
  let fixture: ComponentFixture<ExemploNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
