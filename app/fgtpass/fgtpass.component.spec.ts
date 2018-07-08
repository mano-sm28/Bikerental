import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgtpassComponent } from './fgtpass.component';

describe('FgtpassComponent', () => {
  let component: FgtpassComponent;
  let fixture: ComponentFixture<FgtpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgtpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgtpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
