import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastro3Component } from './app-cadastro3.component';

describe('Cadastro3Component', () => {
  let component: AppCadastro3Component;
  let fixture: ComponentFixture<AppCadastro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastro3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
