import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuFormComponent } from './meu-form.component';

describe('MeuFormComponent', () => {
  let component: MeuFormComponent;
  let fixture: ComponentFixture<MeuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
