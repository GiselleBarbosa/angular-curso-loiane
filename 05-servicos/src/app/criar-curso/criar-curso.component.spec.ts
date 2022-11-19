import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCursoComponent } from './criar-curso.component';

describe('CriarCursoComponent', () => {
  let component: CriarCursoComponent;
  let fixture: ComponentFixture<CriarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
