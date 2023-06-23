import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaisyPage } from './daisy.page';

describe('DaisyPage', () => {
  let component: DaisyPage;
  let fixture: ComponentFixture<DaisyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaisyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
