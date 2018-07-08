import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeuploadComponent } from './bikeupload.component';

describe('BikeuploadComponent', () => {
  let component: BikeuploadComponent;
  let fixture: ComponentFixture<BikeuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
