import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAddedComponent } from './department-added.component';

describe('DepartmentAddedComponent', () => {
  let component: DepartmentAddedComponent;
  let fixture: ComponentFixture<DepartmentAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
