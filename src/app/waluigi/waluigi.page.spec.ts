import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaluigiPage } from './waluigi.page';

describe('WaluigiPage', () => {
  let component: WaluigiPage;
  let fixture: ComponentFixture<WaluigiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaluigiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
