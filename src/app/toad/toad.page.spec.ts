import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToadPage } from './toad.page';

describe('ToadPage', () => {
  let component: ToadPage;
  let fixture: ComponentFixture<ToadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
