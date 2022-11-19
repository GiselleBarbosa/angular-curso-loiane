import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgforComponent } from './diretiva-ngfor.component';

describe('DiretivaNgforComponent', () => {
  let component: DiretivaNgforComponent;
  let fixture: ComponentFixture<DiretivaNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
