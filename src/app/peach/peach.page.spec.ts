import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeachPage } from './peach.page';

describe('PeachPage', () => {
  let component: PeachPage;
  let fixture: ComponentFixture<PeachPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
