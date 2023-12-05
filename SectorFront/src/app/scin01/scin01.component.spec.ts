import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scin01Component } from './scin01.component';

describe('Scin01Component', () => {
  let component: Scin01Component;
  let fixture: ComponentFixture<Scin01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scin01Component]
    });
    fixture = TestBed.createComponent(Scin01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
