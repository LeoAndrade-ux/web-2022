import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcarneComponent } from './editarcarne.component';

describe('EditarcarneComponent', () => {
  let component: EditarcarneComponent;
  let fixture: ComponentFixture<EditarcarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
