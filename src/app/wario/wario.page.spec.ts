import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarioPage } from './wario.page';

describe('WarioPage', () => {
  let component: WarioPage;
  let fixture: ComponentFixture<WarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
