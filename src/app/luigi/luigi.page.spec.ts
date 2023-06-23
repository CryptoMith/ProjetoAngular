import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuigiPage } from './luigi.page';

describe('LuigiPage', () => {
  let component: LuigiPage;
  let fixture: ComponentFixture<LuigiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LuigiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
