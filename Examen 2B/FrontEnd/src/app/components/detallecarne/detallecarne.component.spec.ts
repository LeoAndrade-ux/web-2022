import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecarneComponent } from './detallecarne.component';

describe('DetallecarneComponent', () => {
  let component: DetallecarneComponent;
  let fixture: ComponentFixture<DetallecarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallecarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
