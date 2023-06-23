import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiddykongPage } from './diddykong.page';

describe('DiddykongPage', () => {
  let component: DiddykongPage;
  let fixture: ComponentFixture<DiddykongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiddykongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
