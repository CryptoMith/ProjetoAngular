import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShyGuyPage } from './shy-guy.page';

describe('ShyGuyPage', () => {
  let component: ShyGuyPage;
  let fixture: ComponentFixture<ShyGuyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShyGuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
