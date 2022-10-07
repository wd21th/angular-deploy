/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RakhatComponent } from './Rakhat.component';

describe('RakhatComponent', () => {
  let component: RakhatComponent;
  let fixture: ComponentFixture<RakhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RakhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RakhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
