import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCFN02Component } from './scfn02.component';

describe('SCFN02Component', () => {
  let component: SCFN02Component;
  let fixture: ComponentFixture<SCFN02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCFN02Component]
    });
    fixture = TestBed.createComponent(SCFN02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
