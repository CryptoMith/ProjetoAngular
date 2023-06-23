import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoshiPage } from './yoshi.page';

describe('YoshiPage', () => {
  let component: YoshiPage;
  let fixture: ComponentFixture<YoshiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YoshiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
