import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scin02Component } from './scin02.component';

describe('Scin02Component', () => {
  let component: Scin02Component;
  let fixture: ComponentFixture<Scin02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scin02Component]
    });
    fixture = TestBed.createComponent(Scin02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
