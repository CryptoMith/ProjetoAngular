import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LakituPage } from './lakitu.page';

describe('LakituPage', () => {
  let component: LakituPage;
  let fixture: ComponentFixture<LakituPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LakituPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
