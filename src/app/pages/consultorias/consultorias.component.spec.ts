import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriasComponent } from './consultorias.component';

describe('ConsultoriasComponent', () => {
  let component: ConsultoriasComponent;
  let fixture: ComponentFixture<ConsultoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
