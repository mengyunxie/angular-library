import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMgtComponent } from './device-mgt.component';

describe('DeviceMgtComponent', () => {
  let component: DeviceMgtComponent;
  let fixture: ComponentFixture<DeviceMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
