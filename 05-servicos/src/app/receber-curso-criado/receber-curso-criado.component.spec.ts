import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCursoCriadoComponent } from './receber-curso-criado.component';

describe('ReceberCursoCriadoComponent', () => {
  let component: ReceberCursoCriadoComponent;
  let fixture: ComponentFixture<ReceberCursoCriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceberCursoCriadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberCursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
