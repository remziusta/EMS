import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAddedComponent } from './worker-added.component';

describe('WorkerAddedComponent', () => {
  let component: WorkerAddedComponent;
  let fixture: ComponentFixture<WorkerAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
