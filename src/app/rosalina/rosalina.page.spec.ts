import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosalinaPage } from './rosalina.page';

describe('RosalinaPage', () => {
  let component: RosalinaPage;
  let fixture: ComponentFixture<RosalinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RosalinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
