import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectMainComponent } from './redirect-main.component';

describe('RedirectMainComponent', () => {
  let component: RedirectMainComponent;
  let fixture: ComponentFixture<RedirectMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
