import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignComponent } from './adminsign.component';

describe('AdminsignComponent', () => {
  let component: AdminsignComponent;
  let fixture: ComponentFixture<AdminsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
