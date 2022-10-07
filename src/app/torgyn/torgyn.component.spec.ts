/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TorgynComponent } from './torgyn.component';

describe('TorgynComponent', () => {
  let component: TorgynComponent;
  let fixture: ComponentFixture<TorgynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorgynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorgynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
