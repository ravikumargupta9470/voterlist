import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteligibleComponent } from './noteligible.component';

describe('NoteligibleComponent', () => {
  let component: NoteligibleComponent;
  let fixture: ComponentFixture<NoteligibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteligibleComponent]
    });
    fixture = TestBed.createComponent(NoteligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
