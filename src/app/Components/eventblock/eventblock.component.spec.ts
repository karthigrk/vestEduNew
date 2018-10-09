import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventblockComponent } from './eventblock.component';

describe('EventblockComponent', () => {
  let component: EventblockComponent;
  let fixture: ComponentFixture<EventblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
