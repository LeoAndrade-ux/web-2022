import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecarneComponent } from './createcarne.component';

describe('CreatecarneComponent', () => {
  let component: CreatecarneComponent;
  let fixture: ComponentFixture<CreatecarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
